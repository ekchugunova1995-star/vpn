import { serve } from "@hono/node-server";
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import app from "./worker.js";

const dir = path.resolve(process.env.DATA_DIR || "./data");
fs.mkdirSync(path.join(dir, "apk"), { recursive: true });
const sql = new DatabaseSync(path.join(dir, "shield.db"));
sql.exec("PRAGMA journal_mode=WAL;");
sql.exec(fs.readFileSync(new URL("./schema.sql", import.meta.url), "utf8"));

// D1-compatible wrapper so the app code stays unchanged
const stmt = (q, a = []) => ({
  bind: (...x) => stmt(q, x),
  first: async () => sql.prepare(q).get(...a) ?? null,
  all: async () => ({ results: sql.prepare(q).all(...a) }),
  run: async () => { sql.prepare(q).run(...a); },
  _r: () => sql.prepare(q).run(...a),
});
const DB = {
  prepare: q => stmt(q),
  batch: async list => {
    sql.exec("BEGIN");
    try { list.forEach(s => s._r()); sql.exec("COMMIT"); } catch (e) { sql.exec("ROLLBACK"); throw e; }
  },
};
const file = k => {
  const p = path.resolve(dir, k);
  if (!p.startsWith(path.join(dir, "apk") + path.sep)) throw new Error("bad key");
  return p;
};
const APK = {
  put: async (k, buf) => fs.writeFileSync(file(k), Buffer.from(buf)),
  get: async k => (fs.existsSync(file(k)) ? { body: Readable.toWeb(fs.createReadStream(file(k))) } : null),
  delete: async k => fs.rmSync(file(k), { force: true }),
};
if (!process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET.length < 32) {
  console.error("Set ADMIN_SESSION_SECRET (32+ chars)"); process.exit(1);
}
const env = { DB, APK, ADMIN_SESSION_SECRET: process.env.ADMIN_SESSION_SECRET, SETUP_TOKEN: process.env.SETUP_TOKEN };
const ogPng = fs.existsSync(new URL("./og.png", import.meta.url)) ? fs.readFileSync(new URL("./og.png", import.meta.url)) : null;
const handle = req => (ogPng && new URL(req.url).pathname === "/og.png"
  ? new Response(ogPng, { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } })
  : app.fetch(req, env));
serve({ fetch: handle, port: +process.env.PORT || 3000, hostname: "0.0.0.0" }, i => console.log("Shield VPN on :" + i.port));
