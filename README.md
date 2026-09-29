# Shield VPN (Node + SQLite, Railway)

One Node server: public site, admin, tracking, APK download. Data (SQLite DB + APK files) lives in `DATA_DIR`,
which must be a **Railway Volume** mounted at `/data`, otherwise everything is lost on redeploy.
Pages are server-rendered HTML; texts are in the `T` object in `src/worker.js`.

## Routes
Public: `/ /features /faq /privacy /contact /download /download-unavailable /favicon.svg /og.svg`
API: `POST /api/track`, `GET /api/download`
Admin: `/admin/setup` (first admin), `/admin/login`, `/admin`, `/admin/apk`, `/admin/analytics`, `/admin/settings`, `POST /admin/logout`

## Local
Node 22.13+: `npm i`, `export ADMIN_SESSION_SECRET=... SETUP_TOKEN=...`, `npm start`, open http://localhost:3000

## Deploy on Railway
1. Push this folder to a GitHub repo.
2. Railway → New Project → Deploy from GitHub repo.
3. Service → Settings → Volumes → add volume, mount path `/data`.
4. Variables: `ADMIN_SESSION_SECRET` (random 32+), `SETUP_TOKEN`, `DATA_DIR=/data`.
5. Settings → Networking → Generate Domain (later add custom domain).
6. Open `/admin/setup`, create admin, then delete the `SETUP_TOKEN` variable.
7. `/admin/apk` → upload APK → Set as active. `/admin/settings` → support email, Meta Pixel.

Keep 1 replica (SQLite + volume). Upload limit in code: 100 MB.

## Verify tracking
Open `/?utm_source=facebook&utm_medium=cpc&utm_campaign=shield_uz`, go to `/download`, click Download APK, open FAQ, check `/admin/analytics`. Pixel: `fbevents.js` must be absent when off or rejected.

## Before ads
- [ ] Real support email; privacy text reviewed (retention period, account statements)
- [ ] APK signed and scanned; Meta ad policy for VPN/APK checked
- [ ] PNG og:image (Facebook ignores SVG); HTTPS custom domain; strong admin password
- [ ] Test on Android Chrome: install flow and `/api/download`
