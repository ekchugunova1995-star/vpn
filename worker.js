// Shield VPN — fetch handler: public site, admin panel, tracking, APK download.
// Runs on Node via server.js (env.DB = SQLite, env.APK = files on a volume).

const T = {
en: {
  tag: "Private. Simple. Free.", dl: "Download VPN", how: "How it works", conn: "Connected",
  h1: "A safer way to browse.", sub: "Shield VPN gives you a simple and private way to connect online.",
  why: "Why Shield VPN?",
  feats: [["Private browsing", "Browse the internet with an additional layer of privacy."], ["Simple connection", "Connect with just a few taps."], ["Free to use", "Access the basic Shield VPN experience without a subscription."], ["Android ready", "Designed for Android devices and easy to install."]],
  steps: ["Download Shield VPN", "Install the app", "Connect and browse"], flow: ["Device", "Shield VPN", "Internet"],
  trustH: "Your connection, your choice.", trust: "Shield VPN is designed to provide a simple VPN experience without unnecessary complexity.",
  faqH: "FAQ",
  faq: [["What is Shield VPN?", "Shield VPN is a VPN application designed to provide an additional layer of privacy when browsing the internet."], ["Is Shield VPN free?", "Yes, the basic Shield VPN download is free."], ["Which devices are supported?", "The current APK is intended for Android devices."], ["How do I install Shield VPN?", "Download the APK from the official download page and follow the Android installation instructions."], ["How do I connect?", "Open Shield VPN and use the connection control inside the application."], ["Do I need an account?", "Account requirements depend on the app itself. Edit this answer to match your app."], ["Where can I download the latest version?", "The latest APK is always available through the official Shield VPN download page."], ["How can I contact support?", "Use the contact page or the support address shown there."]],
  unavailable: "Shield VPN is temporarily unavailable", back: "Please check back soon.",
  nav: { home: "Home", features: "Features", faq: "FAQ", privacy: "Privacy", download: "Download" }, foot: { privacy: "Privacy Policy", contact: "Contact" },
  cb: { msg: "We use anonymous analytics. Optional Meta Pixel needs your consent.", ok: "Accept", no: "Reject", manage: "Manage preferences" },
  gs: "Get Shield VPN", dlLead: "Download the latest version of Shield VPN for Android.", ver: "Latest version", type: "File type", size: "File size", upd: "Updated", apk: "Download APK",
  agree: ["By downloading Shield VPN, you agree to our ", "Privacy Policy", "."], instH: "Installation", inst: ["Download the APK.", "Open the downloaded file.", "Follow the Android installation instructions.", "Open Shield VPN and connect."],
  contactH: "Need help?", contactP: "If you have questions about Shield VPN, installation or downloads, contact our support team.",
  e404: "Page not found", e404m: "This page does not exist.", e500: "Something went wrong", e500m: "Please try again later.", home2: "Home",
  ttl: "Shield VPN — Free VPN for Android", desc: "Shield VPN is a simple and free VPN solution for Android. Download the latest version and connect in just a few steps.", privT: "Privacy Policy",
  priv: e => `<p>This policy describes what this website collects. It applies to the website only, not to the behaviour of the Android app.</p>
<h3>What we collect</h3><ul><li>Pages visited, button clicks (Download, FAQ, external links) and timestamps.</li><li>A random anonymous session ID stored in your browser's local storage.</li><li>Referral/UTM parameters (source, medium, campaign, content, term) if present in the link.</li></ul>
<p>Our own analytics database does <b>not</b> store your IP address, device fingerprints or contact details. Our hosting provider (Railway) processes IP addresses and request metadata to deliver and protect the site.</p>
<h3>Meta Pixel</h3><p>If enabled by the site owner, Meta Pixel loads on every visit and sends events (PageView, ViewContent, DownloadAPK when you press the download button) to Meta, a third party with its own privacy policy. Meta may process data such as IP address and browser information and may set its own cookies (for example _fbp). Blocking trackers in your browser prevents it from loading.</p>
<h3>Cookies and local storage</h3><p>We use local storage for the session ID, saved UTM parameters, and a cookie for your language choice. The admin area uses a strictly necessary session cookie for the site owner only.</p>
<h3>Why and how long</h3><p>To understand how many people visit and download, and which campaigns work. Event data is kept for up to 12 months.</p>
<h3>Requests</h3><p>Privacy requests: <a style="text-decoration:underline" href="mailto:${e}">${e}</a>. Because events are anonymous, we may be unable to link them to you.</p>`,
},
uz: {
  tag: "Maxfiy. Oddiy. Bepul.", dl: "VPN yuklab olish", how: "Qanday ishlaydi", conn: "Ulangan",
  h1: "Internetdan xavfsizroq foydalaning.", sub: "Shield VPN internetga oddiy va maxfiy ulanish imkonini beradi.",
  why: "Nega Shield VPN?",
  feats: [["Maxfiy brauzer", "Internetda ishlashda qo'shimcha maxfiylik qatlami."], ["Oddiy ulanish", "Bir necha bosish bilan ulaning."], ["Bepul", "Asosiy Shield VPN imkoniyatlaridan obunasiz foydalaning."], ["Android uchun", "Android qurilmalar uchun yaratilgan, o'rnatish oson."]],
  steps: ["Shield VPN ni yuklab oling", "Ilovani o'rnating", "Ulaning va internetdan foydalaning"], flow: ["Qurilma", "Shield VPN", "Internet"],
  trustH: "Sizning ulanishingiz — sizning tanlovingiz.", trust: "Shield VPN ortiqcha murakkabliksiz oddiy VPN tajribasini taqdim etish uchun yaratilgan.",
  faqH: "Savol-javob",
  faq: [["Shield VPN nima?", "Shield VPN — internetdan foydalanishda qo'shimcha maxfiylik qatlamini ta'minlaydigan VPN ilovasi."], ["Shield VPN bepulmi?", "Ha, Shield VPN ning asosiy versiyasini bepul yuklab olish mumkin."], ["Qaysi qurilmalar qo'llab-quvvatlanadi?", "Joriy APK Android qurilmalar uchun mo'ljallangan."], ["Shield VPN ni qanday o'rnataman?", "Rasmiy yuklab olish sahifasidan APK ni yuklab oling va Android ko'rsatmalariga amal qiling."], ["Qanday ulanaman?", "Shield VPN ni oching va ilova ichidagi ulanish tugmasidan foydalaning."], ["Akkaunt kerakmi?", "Akkaunt talablari ilovaning o'ziga bog'liq. Bu javobni ilovangizga moslab tekshiring."], ["So'nggi versiyani qayerdan yuklab olaman?", "So'nggi APK doim Shield VPN ning rasmiy yuklab olish sahifasida mavjud."], ["Qo'llab-quvvatlash bilan qanday bog'lanaman?", "Aloqa sahifasidan va u yerda ko'rsatilgan manzildan foydalaning."]],
  unavailable: "Shield VPN vaqtincha mavjud emas", back: "Iltimos, birozdan so'ng qaytib keling.",
  nav: { home: "Bosh sahifa", features: "Imkoniyatlar", faq: "Savol-javob", privacy: "Maxfiylik", download: "Yuklab olish" }, foot: { privacy: "Maxfiylik siyosati", contact: "Aloqa" },
  cb: { msg: "Biz anonim analitikadan foydalanamiz. Ixtiyoriy Meta Pixel sizning roziligingizni talab qiladi.", ok: "Qabul qilish", no: "Rad etish", manage: "Sozlamalar" },
  gs: "Shield VPN ni yuklab oling", dlLead: "Android uchun Shield VPN ning so'nggi versiyasini yuklab oling.", ver: "So'nggi versiya", type: "Fayl turi", size: "Fayl hajmi", upd: "Yangilangan", apk: "APK yuklab olish",
  agree: ["Shield VPN ni yuklab olish orqali siz ", "Maxfiylik siyosati", " bilan rozilik bildirasiz."], instH: "O'rnatish", inst: ["APK faylni yuklab oling.", "Yuklab olingan faylni oching.", "Android ko'rsatmalariga amal qilib o'rnating.", "Shield VPN ni oching va ulaning."],
  contactH: "Yordam kerakmi?", contactP: "Shield VPN, o'rnatish yoki yuklab olish bo'yicha savollaringiz bo'lsa, qo'llab-quvvatlash xizmatiga murojaat qiling.",
  e404: "Sahifa topilmadi", e404m: "Bunday sahifa mavjud emas.", e500: "Nimadir xato ketdi", e500m: "Iltimos, keyinroq urinib ko'ring.", home2: "Bosh sahifa",
  ttl: "Shield VPN — Android uchun bepul VPN", desc: "Shield VPN — Android uchun oddiy va bepul VPN. So'nggi versiyani yuklab oling va bir necha qadamda ulaning.", privT: "Maxfiylik siyosati",
  priv: e => `<p>Ushbu siyosat veb-sayt qanday ma'lumotlarni yig'ishini tushuntiradi. U faqat veb-saytga tegishli, Android ilovasining ishiga emas.</p>
<h3>Nimalarni yig'amiz</h3><ul><li>Ko'rilgan sahifalar, tugmalar bosilishi (yuklab olish, savol-javob, tashqi havolalar) va vaqti.</li><li>Brauzeringizning mahalliy xotirasida saqlanadigan tasodifiy anonim sessiya identifikatori.</li><li>Havolada bo'lsa, UTM parametrlari (source, medium, campaign, content, term).</li></ul>
<p>Bizning analitika bazamiz sizning IP manzilingizni, qurilma "barmoq izi"ni yoki aloqa ma'lumotlaringizni <b>saqlamaydi</b>. Hosting provayderimiz (Railway) saytni ishlatish va himoyalash uchun IP manzillar va so'rovlarning texnik ma'lumotlarini qayta ishlaydi.</p>
<h3>Meta Pixel</h3><p>Sayt egasi Meta Pixel'ni yoqqan bo'lsa, u har bir tashrifda yuklanadi va voqealarni (PageView, ViewContent, yuklab olish tugmasi bosilganda DownloadAPK) Metaga yuboradi; Meta — o'z maxfiylik siyosatiga ega uchinchi tomon. Meta IP manzil va brauzer ma'lumotlarini qayta ishlashi hamda o'z cookie fayllarini (masalan, _fbp) o'rnatishi mumkin. Brauzeringizda trekerlarni bloklasangiz, u yuklanmaydi.</p>
<h3>Cookie va mahalliy xotira</h3><p>Mahalliy xotirani sessiya ID, saqlangan UTM belgilar uchun, cookie'ni esa til tanlovi uchun ishlatamiz. Admin panel faqat sayt egasi uchun zarur sessiya cookie'sidan foydalanadi.</p>
<h3>Nima uchun va qancha vaqt</h3><p>Saytga qancha odam kirishi va yuklab olishini hamda qaysi kampaniyalar ishlashini tushunish uchun. Voqealar 12 oygacha saqlanadi.</p>
<h3>So'rovlar</h3><p>Maxfiylik bo'yicha so'rovlar: <a style="text-decoration:underline" href="mailto:${e}">${e}</a>. Voqealar anonim bo'lgani uchun ularni sizga bog'lay olmasligimiz mumkin.</p>`,
},
ru: {
  tag: "Приватно. Просто. Бесплатно.", dl: "Скачать VPN", how: "Как это работает", conn: "Подключено",
  h1: "Безопаснее в интернете.", sub: "Shield VPN — простой и приватный способ подключаться к сети.",
  why: "Почему Shield VPN?",
  feats: [["Приватный серфинг", "Пользуйтесь интернетом с дополнительным уровнем приватности."], ["Простое подключение", "Подключайтесь в несколько касаний."], ["Бесплатно", "Базовые возможности Shield VPN — без подписки."], ["Для Android", "Создан для Android-устройств, легко устанавливается."]],
  steps: ["Скачайте Shield VPN", "Установите приложение", "Подключитесь и пользуйтесь интернетом"], flow: ["Устройство", "Shield VPN", "Интернет"],
  trustH: "Ваше соединение — ваш выбор.", trust: "Shield VPN создан, чтобы дать простой VPN без лишней сложности.",
  faqH: "Вопросы и ответы",
  faq: [["Что такое Shield VPN?", "Shield VPN — это VPN-приложение, которое обеспечивает дополнительный уровень приватности при работе в интернете."], ["Shield VPN бесплатный?", "Да, базовая версия Shield VPN доступна для скачивания бесплатно."], ["Какие устройства поддерживаются?", "Текущий APK предназначен для устройств на Android."], ["Как установить Shield VPN?", "Скачайте APK на официальной странице загрузки и следуйте инструкциям Android по установке."], ["Как подключиться?", "Откройте Shield VPN и используйте кнопку подключения внутри приложения."], ["Нужен ли аккаунт?", "Требования к аккаунту зависят от самого приложения. Проверьте и при необходимости поправьте этот ответ."], ["Где скачать последнюю версию?", "Последний APK всегда доступен на официальной странице загрузки Shield VPN."], ["Как связаться с поддержкой?", "Воспользуйтесь страницей контактов и указанным там адресом поддержки."]],
  unavailable: "Shield VPN временно недоступен", back: "Пожалуйста, загляните позже.",
  nav: { home: "Главная", features: "Возможности", faq: "Вопросы", privacy: "Конфиденциальность", download: "Скачать" }, foot: { privacy: "Политика конфиденциальности", contact: "Контакты" },
  cb: { msg: "Мы используем анонимную аналитику. Необязательный Meta Pixel требует вашего согласия.", ok: "Принять", no: "Отклонить", manage: "Настройки" },
  gs: "Скачайте Shield VPN", dlLead: "Скачайте последнюю версию Shield VPN для Android.", ver: "Последняя версия", type: "Тип файла", size: "Размер файла", upd: "Обновлено", apk: "Скачать APK",
  agree: ["Скачивая Shield VPN, вы соглашаетесь с нашей ", "Политикой конфиденциальности", "."], instH: "Установка", inst: ["Скачайте APK-файл.", "Откройте скачанный файл.", "Следуйте инструкциям Android по установке.", "Откройте Shield VPN и подключитесь."],
  contactH: "Нужна помощь?", contactP: "Если у вас есть вопросы о Shield VPN, установке или скачивании, свяжитесь со службой поддержки.",
  e404: "Страница не найдена", e404m: "Такой страницы не существует.", e500: "Что-то пошло не так", e500m: "Пожалуйста, попробуйте позже.", home2: "На главную",
  ttl: "Shield VPN — бесплатный VPN для Android", desc: "Shield VPN — простой и бесплатный VPN для Android. Скачайте последнюю версию и подключитесь за несколько шагов.", privT: "Политика конфиденциальности",
  priv: e => `<p>Эта политика описывает, какие данные собирает сайт. Она относится только к сайту, а не к работе Android-приложения.</p>
<h3>Что мы собираем</h3><ul><li>Посещённые страницы, клики по кнопкам (скачивание, FAQ, внешние ссылки) и время событий.</li><li>Случайный анонимный идентификатор сессии в локальном хранилище браузера.</li><li>Реферальные/UTM-параметры (source, medium, campaign, content, term), если они есть в ссылке.</li></ul>
<p>Наша собственная база аналитики <b>не</b> хранит ваш IP-адрес, отпечатки устройства или контактные данные. Наш хостинг-провайдер (Railway) обрабатывает IP-адреса и технические данные запросов для работы и защиты сайта.</p>
<h3>Meta Pixel</h3><p>Если владелец сайта включил Meta Pixel, он загружается при каждом посещении и отправляет события (PageView, ViewContent, DownloadAPK при нажатии на кнопку скачивания) в Meta — стороннюю компанию со своей политикой конфиденциальности. Meta может обрабатывать данные, например IP-адрес и сведения о браузере, и устанавливать собственные cookie (например, _fbp). Блокировка трекеров в браузере предотвращает его загрузку.</p>
<h3>Cookie и локальное хранилище</h3><p>Мы используем локальное хранилище для ID сессии, сохранённых UTM-меток, а cookie — для выбора языка. Админ-панель использует необходимую сессионную cookie только для владельца сайта.</p>
<h3>Зачем и как долго</h3><p>Чтобы понимать, сколько людей посещают сайт и скачивают приложение, и какие кампании работают. События хранятся до 12 месяцев.</p>
<h3>Запросы</h3><p>Запросы по конфиденциальности: <a style="text-decoration:underline" href="mailto:${e}">${e}</a>. Поскольку события анонимны, мы можем не иметь возможности связать их с вами.</p>`,
},
};
function pickLang(req, url, s) {
  const q = url.searchParams.get("lang");
  if (q && T[q]) return [q, true];
  const m = (req.headers.get("cookie") || "").match(/(?:^|; )lang=(\w+)/);
  if (m && T[m[1]]) return [m[1], false];
  return [T[s.default_language] ? s.default_language : "uz", false];
}

const enc = new TextEncoder();
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const hex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
const now = () => Date.now();
const day = ts => new Date(ts).toISOString().slice(0, 10);
const mb = n => (n / 1048576).toFixed(1) + " MB";

async function hmac(secret, data) {
  const k = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", k, enc.encode(data)));
}
async function pbkdf2(pw, salt) {
  const k = await crypto.subtle.importKey("raw", enc.encode(pw), "PBKDF2", false, ["deriveBits"]);
  return hex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: enc.encode(salt), iterations: 100000 }, k, 256));
}
const safeEq = (a, b) => a.length === b.length && [...a].reduce((r, c, i) => r | (c.charCodeAt(0) ^ b.charCodeAt(i)), 0) === 0;

const DEFAULTS = { site_name: "Shield VPN", support_email: "support@example.com", support_link: "", telegram_link: "",
  download_text: "Download VPN", pixel_id: "", pixel_enabled: "0", tracking_enabled: "1", default_language: "uz" };
async function getSettings(env) {
  const { results } = await env.DB.prepare("SELECT key,value FROM settings").all();
  return { ...DEFAULTS, ...Object.fromEntries(results.map(r => [r.key, r.value])) };
}

// ---------- sessions / csrf ----------
async function getSession(req, env) {
  const m = (req.headers.get("cookie") || "").match(/(?:^|; )sv_admin=([^;]+)/);
  if (!m) return null;
  const [email, exp, sig] = decodeURIComponent(m[1]).split("|");
  if (!sig || +exp < now() || !safeEq(sig, await hmac(env.ADMIN_SESSION_SECRET, email + "|" + exp))) return null;
  return { email, csrf: await hmac(env.ADMIN_SESSION_SECRET, "csrf|" + sig) };
}
async function sessionCookie(env, email) {
  const exp = now() + 8 * 3600e3;
  const v = encodeURIComponent(`${email}|${exp}|${await hmac(env.ADMIN_SESSION_SECRET, email + "|" + exp)}`);
  return `sv_admin=${v}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`;
}
const html = (body, status = 200, headers = {}) => new Response(body, { status, headers: { "content-type": "text/html; charset=utf-8", "x-content-type-options": "nosniff", ...headers } });
const redirect = (loc, headers = {}) => new Response(null, { status: 303, headers: { location: loc, ...headers } });

// ---------- styles ----------
const CSS = `:root{--bg:#050b1f;--b:#2563eb;--c:#22d3ee;--t:#e8f0ff;--m:#93a4c8}*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;background:radial-gradient(1200px 600px at 70% -10%,#0f2a6b55,transparent),var(--bg);color:var(--t);font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;overflow-x:hidden}
a{color:inherit;text-decoration:none}.w{max-width:1100px;margin:0 auto;padding:0 20px}
header{position:sticky;top:0;z-index:10;backdrop-filter:blur(14px);background:#050b1fcc;border-bottom:1px solid #ffffff14}
.nav{display:flex;align-items:center;justify-content:space-between;height:64px;gap:16px}.logo{display:flex;gap:10px;align-items:center;font-weight:700;font-size:18px}
nav{display:flex;gap:22px;align-items:center}nav a{color:var(--m)}nav a:hover{color:#fff}
.btn{display:inline-block;padding:12px 24px;border-radius:12px;font-weight:600;background:linear-gradient(135deg,var(--b),var(--c));color:#fff;border:0;cursor:pointer;box-shadow:0 8px 30px #2563eb55;font-size:16px}
.btn.o{background:transparent;border:1px solid #ffffff33;box-shadow:none}.btn.s{padding:8px 16px;font-size:14px}
#mb{display:none;background:none;border:0;color:#fff;font-size:28px}
.hero{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;padding:70px 0}
h1{font-size:clamp(36px,6vw,64px);line-height:1.05;margin:0 0 18px;background:linear-gradient(135deg,#fff,#7dd3fc);-webkit-background-clip:text;color:transparent}
h2{font-size:clamp(26px,4vw,38px);margin:0 0 24px}.lead{color:var(--m);font-size:19px;max-width:520px}.row{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}
.card{background:#ffffff0a;border:1px solid #ffffff1a;border-radius:20px;padding:24px;backdrop-filter:blur(10px)}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}.card h3{margin:0 0 8px}.card p{margin:0;color:var(--m)}
section{padding:50px 0}.phone{width:230px;height:440px;margin:auto;border-radius:36px;border:2px solid #3b82f6aa;background:linear-gradient(#0b1a40,#050b1f);box-shadow:0 0 80px #2563eb66;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;position:relative}
.ring{width:120px;height:120px;border-radius:50%;border:3px solid var(--c);display:grid;place-items:center;animation:p 2.5s infinite}@keyframes p{50%{box-shadow:0 0 50px var(--c);transform:scale(1.04)}}
.flow{display:flex;justify-content:center;gap:14px;align-items:center;flex-wrap:wrap;color:var(--m);margin-top:24px}.n{font-size:34px;font-weight:800;color:var(--c)}
details{background:#ffffff0a;border:1px solid #ffffff1a;border-radius:14px;padding:16px 20px;margin-bottom:10px}summary{cursor:pointer;font-weight:600}details p{color:var(--m);margin:10px 0 0}
footer{border-top:1px solid #ffffff14;padding:32px 0;color:var(--m);margin-top:40px}.fr{display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;align-items:center}
#cb{position:fixed;bottom:12px;left:12px;right:12px;max-width:520px;background:#0b1a40;border:1px solid #ffffff22;border-radius:14px;padding:14px;display:none;gap:10px;align-items:center;flex-wrap:wrap;z-index:20;font-size:14px}
.prose p,.prose li{color:var(--m)}table{width:100%;border-collapse:collapse}td,th{padding:8px;border-bottom:1px solid #ffffff14;text-align:left;font-size:14px;word-break:break-all}
input,textarea,select{width:100%;padding:10px 12px;border-radius:10px;border:1px solid #ffffff33;background:#0a1436;color:#fff;font:inherit;margin:4px 0 12px}label{font-size:14px;color:var(--m)}
.adm{display:grid;grid-template-columns:200px 1fr;min-height:100vh}.side{background:#070f2b;padding:20px;display:flex;flex-direction:column;gap:6px}.side a,.side button{padding:8px 12px;border-radius:8px;color:var(--m);background:none;border:0;text-align:left;font:inherit;cursor:pointer}.side a:hover{background:#ffffff10;color:#fff}.main{padding:28px}
.bar{height:8px;background:linear-gradient(90deg,var(--b),var(--c));border-radius:4px}
@media(max-width:800px){.hero{grid-template-columns:1fr;padding:40px 0}nav{display:none;position:absolute;top:64px;left:0;right:0;background:#050b1f;flex-direction:column;padding:20px;border-bottom:1px solid #ffffff14}nav.open{display:flex}#mb{display:block}.adm{grid-template-columns:1fr}.side{flex-direction:row;flex-wrap:wrap}}`;

const LOGO = `<svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M16 2l11 4v9c0 7-5 12-11 15C10 27 5 22 5 15V6z" fill="url(#g)"/><path d="M11 16l4 4 6-8" stroke="#050b1f" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`;

// ---------- public layout ----------
const dlText = s => (s.lang === "en" ? s.download_text : s.t.dl);
function layout(s, title, body, path, extra = {}) {
  const t = s.t || T.en, lang = s.lang || "en", o = s.origin || "";
  const ttl = title ? `${title} — ${s.site_name}` : t.ttl;
  const pixel = s.pixel_enabled === "1" && /^\d{5,20}$/.test(s.pixel_id) ? s.pixel_id : "";
  const cta = `<a class="btn s" href="/download" data-track="download_click">${esc(dlText(s))}</a>`;
  const sw = `<span class="lang">${["uz", "ru", "en"].map(l => `<a href="${esc(path)}?lang=${l}" class="${l === lang ? "on" : ""}">${l.toUpperCase()}</a>`).join("")}</span>`;
  return html(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(ttl)}</title><meta name="description" content="${esc(t.desc)}"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:title" content="${esc(ttl)}"><meta property="og:description" content="${esc(t.desc)}"><meta property="og:image" content="${esc(o)}/og.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:url" content="${esc(o + path)}"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image">
<style>${CSS}.lang{display:flex;gap:2px}.lang a{padding:4px 8px;border-radius:8px;font-size:13px;color:var(--m)}.lang a.on{background:#ffffff18;color:#fff}</style></head><body>
<header><div class="w nav"><a class="logo" href="/">${LOGO}${esc(s.site_name)}</a><button id="mb" aria-label="Menu">☰</button>
<nav id="nav"><a href="/">${t.nav.home}</a><a href="/features">${t.nav.features}</a><a href="/faq">${t.nav.faq}</a><a href="/privacy">${t.nav.privacy}</a><a href="/download">${t.nav.download}</a>${sw}${cta}</nav></div></header>
<main>${body}</main>
<footer><div class="w fr"><span>© ${new Date().getFullYear()} ${esc(s.site_name)} · <a href="/privacy">${t.foot.privacy}</a> · <a href="/contact">${t.foot.contact}</a></span><a class="btn s" href="/download" data-track="download_click">${esc(dlText(s))}</a></div></footer>
<script>window.SV=${JSON.stringify({ track: s.tracking_enabled === "1", pixel, page: extra.event || null })};
(function(){var q=new URLSearchParams(location.search),K=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],ls=window.localStorage||{};
var sid=ls.sv_sid;if(!sid){sid=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now());ls.sv_sid=sid}
var u=JSON.parse(ls.sv_utm||"{}");K.forEach(function(k){if(q.get(k)){u[k]=q.get(k).slice(0,100);u._n=1}});if(u._n)ls.sv_utm=JSON.stringify(u);
function tr(e){if(!SV.track)return;var b=JSON.stringify(Object.assign({event:e,page:location.pathname,sid:sid},u));
if(navigator.sendBeacon)navigator.sendBeacon("/api/track",new Blob([b],{type:"application/json"}));else fetch("/api/track",{method:"POST",body:b,keepalive:true})}
function pix(){if(!SV.pixel||window.fbq)return;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init",SV.pixel);fbq("track","PageView");if(SV.page==="download_page_view")fbq("track","ViewContent",{content_name:"Shield VPN APK"})}
tr("page_view");if(SV.page)tr(SV.page);pix();
document.getElementById("mb").onclick=function(){document.getElementById("nav").classList.toggle("open")};
document.addEventListener("click",function(e){var a=e.target.closest("[data-track]");if(!a)return;var ev=a.dataset.track;
if(ev==="apk_click"){var p=new URLSearchParams(Object.assign({sid:sid},u));p.delete("_n");a.href="/api/download?"+p;if(window.fbq)fbq("trackCustom","DownloadAPK");return}
tr(ev)});
document.querySelectorAll("details[data-faq]").forEach(function(d){d.addEventListener("toggle",function(){if(d.open)tr("faq_open")})})})();</script></body></html>`);
}

const dlCta = s => `<a class="btn" href="/download" data-track="download_click">${esc(dlText(s))}</a>`;
const phone = t => `<div class="phone" aria-hidden="true"><svg width="200" height="60" viewBox="0 0 200 60"><g stroke="#3b82f6" fill="#22d3ee"><path d="M10 30h50M140 30h50" fill="none"/><circle cx="10" cy="30" r="4"/><circle cx="190" cy="30" r="4"/></g></svg><div class="ring">${LOGO.replace('width="30" height="30"', 'width="56" height="56"')}</div><b>Shield VPN</b><span style="color:#22d3ee">● ${t.conn}</span></div>`;

function home(s) {
  const t = s.t;
  return layout(s, "", `<div class="w"><div class="hero"><div><h1>${t.h1}</h1><p class="lead">${t.sub}</p><div class="row">${dlCta(s)}<a class="btn o" href="#how">${t.how}</a></div></div>${phone(t)}</div>
<section><h2>${t.why}</h2><div class="grid">${t.feats.map(f => `<div class="card"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("")}</div><div class="row">${dlCta(s)}</div></section>
<section id="how"><h2>${t.how}</h2><div class="grid">${t.steps.map((x, i) => `<div class="card"><div class="n">0${i + 1}</div><h3>${x}</h3></div>`).join("")}</div><div class="flow"><b>${t.flow[0]}</b>→<b style="color:#22d3ee">${t.flow[1]}</b>→<b>${t.flow[2]}</b></div></section>
<section class="card" style="text-align:center"><h2>${t.trustH}</h2><p class="lead" style="margin:auto">${t.trust}</p></section>
<section style="text-align:center"><h2>${t.gs}</h2>${dlCta(s)}</section></div>`, "/");
}
const features = s => layout(s, s.t.nav.features, `<div class="w"><section><h2>${s.t.why}</h2><div class="grid">${s.t.feats.map(f => `<div class="card"><h3>${f[0]}</h3><p>${f[1]}</p></div>`).join("")}</div><div class="row">${dlCta(s)}</div></section></div>`, "/features");
const faq = s => layout(s, s.t.faqH, `<div class="w"><section><h2>${s.t.faqH}</h2>${s.t.faq.map(q => `<details data-faq><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</section></div>`, "/faq");
const contact = s => layout(s, s.t.foot.contact, `<div class="w"><section><h2>${s.t.contactH}</h2><p class="lead">${s.t.contactP}</p><p><a class="btn" href="${s.support_link ? esc(s.support_link) : "mailto:" + esc(s.support_email)}" data-track="external_click">${esc(s.support_email)}</a></p>${s.telegram_link ? `<p><a href="${esc(s.telegram_link)}" data-track="external_click">Telegram</a></p>` : ""}</section></div>`, "/contact");
const privacy = s => layout(s, s.t.privT, `<div class="w prose"><section><h2>${s.t.privT}</h2>${s.t.priv(esc(s.support_email))}</section></div>`, "/privacy", { event: "privacy_view" });

async function downloadPage(s, env) {
  const t = s.t;
  const a = await env.DB.prepare("SELECT * FROM apk_versions WHERE is_active=1").first();
  const card = a ? `<div class="card"><h3>Shield VPN</h3><p>${t.ver}: <b>${esc(a.version)}</b><br>${t.type}: APK<br>${t.size}: ${mb(a.file_size)}<br>${t.upd}: ${day(a.created_at)}</p><p style="margin-top:18px"><a class="btn" href="/api/download" data-track="apk_click">${t.apk}</a></p><p style="margin-top:12px;font-size:14px">${t.agree[0]}<a style="text-decoration:underline" href="/privacy">${t.agree[1]}</a>${t.agree[2]}</p></div>`
    : `<div class="card"><h3>${t.unavailable}</h3><p>${t.back}</p></div>`;
  return layout(s, t.nav.download, `<div class="w"><section><h1 style="font-size:44px">${t.gs}</h1><p class="lead">${t.dlLead}</p><div style="max-width:520px;margin-top:24px">${card}</div>
<h3 style="margin-top:36px">${t.instH}</h3><ol class="prose">${t.inst.map(x => `<li>${x}</li>`).join("")}</ol></section></div>`, "/download", { event: "download_page_view" });
}
function errPage(s, code, title, msg) {
  const t = s.t || T.en;
  const r = layout(s, title, `<div class="w" style="text-align:center;padding:100px 0">${+code ? `<h1>${code}</h1>` : ""}<h2>${title}</h2><p class="lead" style="margin:auto">${msg}</p><p style="margin-top:24px"><a class="btn" href="/">${t.home2}</a></p></div>`, "/");
  return new Response(r.body, { status: code === "Unavailable" ? 503 : +code || 200, headers: r.headers });
}

// ---------- tracking ----------
const EVENTS = new Set(["page_view", "download_page_view", "download_click", "apk_download", "faq_open", "privacy_view", "external_click"]);
const cl = (v, n = 100) => (typeof v === "string" && v ? v.slice(0, n) : null);
async function logEvent(env, e) {
  await env.DB.prepare("INSERT INTO events(event_name,page,timestamp,anonymous_session_id,utm_source,utm_medium,utm_campaign,utm_content,utm_term) VALUES(?,?,?,?,?,?,?,?,?)")
    .bind(e.event, cl(e.page, 200), now(), /^[\w-]{8,64}$/.test(e.sid || "") ? e.sid : null, cl(e.utm_source), cl(e.utm_medium), cl(e.utm_campaign), cl(e.utm_content), cl(e.utm_term)).run();
}
async function apiTrack(req, env, s) {
  if (s.tracking_enabled !== "1") return new Response(null, { status: 204 });
  const raw = await req.text();
  if (raw.length > 2000) return new Response(null, { status: 413 });
  let e; try { e = JSON.parse(raw); } catch { return new Response(null, { status: 400 }); }
  if (!EVENTS.has(e.event) || e.event === "apk_download") return new Response(null, { status: 400 });
  await logEvent(env, e);
  return new Response(null, { status: 204 });
}
async function apiDownload(env, url, s) {
  const a = await env.DB.prepare("SELECT * FROM apk_versions WHERE is_active=1").first();
  const obj = a && await env.APK.get(a.storage_key);
  if (!obj) return redirect("/download-unavailable");
  const p = Object.fromEntries(url.searchParams);
  if (s.tracking_enabled === "1") await logEvent(env, { event: "apk_download", page: "/api/download", ...p });
  return new Response(obj.body, { headers: { "content-type": "application/vnd.android.package-archive", "content-disposition": `attachment; filename="shield-vpn-${a.version.replace(/[^\w.-]/g, "")}.apk"`, "content-length": String(a.file_size), "cache-control": "no-store", "x-content-type-options": "nosniff" } });
}

// ---------- admin ----------
const ADM_NAV = c => `<div class="side"><b style="margin-bottom:12px">Shield VPN Admin</b><a href="/admin">Dashboard</a><a href="/admin/apk">APK Manager</a><a href="/admin/analytics">Analytics</a><a href="/admin/settings">Settings</a><form method="post" action="/admin/logout"><input type="hidden" name="csrf" value="${c}"><button>Logout</button></form></div>`;
const admPage = (ses, title, body) => html(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} — Admin</title><style>${CSS}</style></head><body><div class="adm">${ADM_NAV(ses.csrf)}<div class="main"><h2>${title}</h2>${body}</div></div></body></html>`, 200, { "cache-control": "no-store" });
const authForm = (title, fields, msg = "") => html(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title><style>${CSS}</style></head><body><div class="w" style="max-width:400px;padding-top:80px"><div class="card"><h2>${title}</h2>${msg ? `<p style="color:#fca5a5">${esc(msg)}</p>` : ""}<form method="post">${fields}<button class="btn">${title}</button></form></div></div></body></html>`, 200, { "cache-control": "no-store" });

async function stats(env, range) {
  const since = range === "all" ? 0 : now() - ({ today: 1, "7": 7, "30": 30 }[range] || 7) * 86400e3;
  const q = (sql, ...a) => env.DB.prepare(sql).bind(since, ...a);
  const one = async (sql) => (await q(sql).first()) || {};
  const c = await one(`SELECT SUM(event_name='page_view') v,COUNT(DISTINCT anonymous_session_id) u,SUM(event_name='download_page_view') dp,SUM(event_name='download_click') dc,SUM(event_name='apk_download') d FROM events WHERE timestamp>=?`);
  const top = async col => (await q(`SELECT COALESCE(${col},'(direct)') k,COUNT(*) n FROM events WHERE timestamp>=? AND event_name='page_view' GROUP BY 1 ORDER BY 2 DESC LIMIT 8`).all()).results;
  const days = (await q(`SELECT date(timestamp/1000,'unixepoch') d,SUM(event_name='page_view') v,SUM(event_name='apk_download') a FROM events WHERE timestamp>=? GROUP BY 1 ORDER BY 1 DESC LIMIT 31`).all()).results;
  const recent = (await q(`SELECT event_name,page,timestamp,utm_source,utm_campaign FROM events WHERE timestamp>=? ORDER BY id DESC LIMIT 15`).all()).results;
  const v = c.v || 0, d = c.d || 0;
  return { v, u: c.u || 0, dp: c.dp || 0, dc: c.dc || 0, d, rate: v ? Math.round(d / v * 100) : 0, sources: await top("utm_source"), campaigns: await top("utm_campaign"), pages: await top("page"), days, recent };
}
const tbl = (rows, cols) => `<table>${rows.map(r => `<tr>${cols.map(c => `<td>${esc(r[c])}</td>`).join("")}</tr>`).join("") || "<tr><td>No data</td></tr>"}</table>`;

async function admin(req, env, url, s) {
  const p = url.pathname, post = req.method === "POST";
  const admins = await env.DB.prepare("SELECT COUNT(*) n FROM admins").first();
  if (p === "/admin/setup") { // first admin only, guarded by SETUP_TOKEN secret
    if (admins.n > 0) return redirect("/admin/login");
    if (!post) return authForm("Create admin", `<label>Setup token</label><input type="password" name="token" required><label>Email</label><input name="email" type="email" required><label>Password (min 12)</label><input name="password" type="password" minlength="12" required>`);
    const f = await req.formData(), pw = String(f.get("password") || "");
    if (!env.SETUP_TOKEN || !safeEq(String(f.get("token")), env.SETUP_TOKEN) || pw.length < 12) return authForm("Create admin", "", "Invalid token or password too short.");
    const salt = crypto.randomUUID();
    await env.DB.prepare("INSERT INTO admins(email,password_hash,created_at,updated_at) VALUES(?,?,?,?)").bind(String(f.get("email")).toLowerCase(), salt + "$" + await pbkdf2(pw, salt), now(), now()).run();
    return redirect("/admin/login");
  }
  if (p === "/admin/login") {
    const fields = `<label>Email / Username</label><input name="email" required autocomplete="username"><label>Password</label><input type="password" name="password" required autocomplete="current-password">`;
    if (!post) return authForm("Login", fields);
    const ip = (req.headers.get("x-forwarded-for") || "x").split(",")[0].trim();
    await env.DB.prepare("DELETE FROM login_attempts WHERE ts<?").bind(now() - 900e3).run();
    const n = (await env.DB.prepare("SELECT COUNT(*) n FROM login_attempts WHERE ip=?").bind(ip).first()).n;
    if (n >= 5) return authForm("Login", fields, "Too many attempts. Try again in 15 minutes.");
    const f = await req.formData(), email = String(f.get("email")).toLowerCase();
    const a = await env.DB.prepare("SELECT * FROM admins WHERE email=?").bind(email).first();
    const [salt, h] = (a?.password_hash || "x$y").split("$");
    const ok = a && safeEq(await pbkdf2(String(f.get("password")), salt), h);
    if (!ok) { await env.DB.prepare("INSERT INTO login_attempts VALUES(?,?)").bind(ip, now()).run(); return authForm("Login", fields, "Invalid credentials."); }
    return redirect("/admin", { "set-cookie": await sessionCookie(env, email) });
  }
  const ses = await getSession(req, env);
  if (!ses) return redirect(admins.n ? "/admin/login" : "/admin/setup");
  const form = post ? await req.formData() : null;
  if (post && !safeEq(String(form.get("csrf") || ""), ses.csrf)) return new Response("Bad CSRF token", { status: 403 });
  const csrf = `<input type="hidden" name="csrf" value="${ses.csrf}">`;

  if (p === "/admin/logout" && post) return redirect("/admin/login", { "set-cookie": "sv_admin=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0" });

  if (p === "/admin") {
    const st = await stats(env, "all"), a = await env.DB.prepare("SELECT * FROM apk_versions WHERE is_active=1").first();
    const px = s.pixel_enabled === "1" && s.pixel_id ? "Enabled (" + esc(s.pixel_id) + ")" : "Off";
    return admPage(ses, "Dashboard", `<div class="grid">${[["Visitors", st.u], ["Downloads", st.d], ["Download rate", st.rate + "%"], ["Current APK", a ? "v" + esc(a.version) : "None"], ["Last APK update", a ? day(a.created_at) : "—"], ["Meta Pixel", px]].map(x => `<div class="card"><p>${x[0]}</p><h3>${x[1]}</h3></div>`).join("")}</div><h3>Recent activity</h3>${tbl(st.recent.map(r => ({ e: r.event_name, p: r.page, t: new Date(r.timestamp).toISOString() })), ["e", "p", "t"])}`);
  }

  if (p === "/admin/analytics") {
    const r = url.searchParams.get("range") || "7", st = await stats(env, r), mx = Math.max(1, ...st.days.map(d => d.v));
    return admPage(ses, "Analytics", `<p>${[["today", "Today"], ["7", "7 days"], ["30", "30 days"], ["all", "All time"]].map(x => `<a class="btn s ${r === x[0] ? "" : "o"}" href="?range=${x[0]}">${x[1]}</a>`).join(" ")}</p>
<div class="grid">${[["Total visits", st.v], ["Unique visitors", st.u], ["Download page views", st.dp], ["Download clicks", st.dc], ["APK downloads", st.d], ["Conversion", st.rate + "%"]].map(x => `<div class="card"><p>${x[0]}</p><h3>${x[1]}</h3></div>`).join("")}</div>
<h3>Visits / Downloads by day</h3><table>${st.days.map(d => `<tr><td style="width:110px">${d.d}</td><td><div class="bar" style="width:${Math.round(d.v / mx * 100)}%"></div></td><td style="width:110px">${d.v} / ${d.a}</td></tr>`).join("")}</table>
<h3>Top sources</h3>${tbl(st.sources, ["k", "n"])}<h3>Top campaigns</h3>${tbl(st.campaigns, ["k", "n"])}<h3>Top pages</h3>${tbl(st.pages, ["k", "n"])}<h3>Recent events</h3>${tbl(st.recent.map(r => ({ e: r.event_name, p: r.page, s: r.utm_source, c: r.utm_campaign, t: new Date(r.timestamp).toISOString() })), ["e", "p", "s", "c", "t"])}`);
  }

  if (p === "/admin/settings") {
    if (post) {
      const set = (k, v) => env.DB.prepare("INSERT INTO settings(key,value,updated_at) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(k, v, now()).run();
      const g = k => String(form.get(k) || "").trim().slice(0, 300);
      const pid = g("pixel_id"); if (pid && !/^\d{5,20}$/.test(pid)) return new Response("Invalid Pixel ID", { status: 400 });
      const safeUrl = u => (!u || /^(https?:\/\/|mailto:)/.test(u)) ? u : "";
      for (const k of ["site_name", "support_email", "download_text", "default_language"]) await set(k, g(k) || DEFAULTS[k]);
      await set("support_link", safeUrl(g("support_link"))); await set("telegram_link", safeUrl(g("telegram_link")));
      await set("pixel_id", pid); await set("pixel_enabled", form.get("pixel_enabled") ? "1" : "0"); await set("tracking_enabled", form.get("tracking_enabled") ? "1" : "0");
      return redirect("/admin/settings");
    }
    const i = (k, l) => `<label>${l}</label><input name="${k}" value="${esc(s[k])}">`;
    return admPage(ses, "Settings", `<form method="post" style="max-width:520px">${csrf}<h3>Website</h3>${i("site_name", "Site name")}${i("support_email", "Support email")}${i("default_language", "Default language")}<h3>Download</h3>${i("download_text", "Download button text")}<h3>Meta Pixel</h3>${i("pixel_id", "Meta Pixel ID")}<label><input type="checkbox" name="pixel_enabled" style="width:auto" ${s.pixel_enabled === "1" ? "checked" : ""}> Enable Meta Pixel</label><h3>Analytics</h3><label><input type="checkbox" name="tracking_enabled" style="width:auto" ${s.tracking_enabled === "1" ? "checked" : ""}> Enable tracking</label><h3>Links</h3>${i("support_link", "Support link")}${i("telegram_link", "Telegram link")}<button class="btn">Save</button></form>`);
  }

  if (p === "/admin/apk") {
    if (post) {
      const act = String(form.get("action"));
      if (act === "upload") {
        const f = form.get("file"), ver = String(form.get("version") || "").trim();
        if (!f || typeof f === "string" || !/^[\w.+-]{1,32}$/.test(ver)) return new Response("Invalid version or file", { status: 400 });
        const MAX = 100 * 1024 * 1024, buf = await f.arrayBuffer();
        const zip = new Uint8Array(buf.slice(0, 4)), okMagic = zip[0] === 0x50 && zip[1] === 0x4b && zip[2] === 3 && zip[3] === 4;
        if (!/\.apk$/i.test(f.name) || !okMagic || buf.byteLength > MAX || buf.byteLength < 1024) return new Response("File must be a valid .apk under 100 MB", { status: 400 });
        const sum = hex(await crypto.subtle.digest("SHA-256", buf)), key = `apk/${crypto.randomUUID()}.apk`;
        await env.APK.put(key, buf, { httpMetadata: { contentType: "application/vnd.android.package-archive" } });
        await env.DB.prepare("INSERT INTO apk_versions(version,filename,storage_key,file_size,checksum,release_notes,is_active,created_at) VALUES(?,?,?,?,?,?,0,?)").bind(ver, f.name.replace(/[^\w.-]/g, "_").slice(0, 80), key, buf.byteLength, sum, String(form.get("notes") || "").slice(0, 1000), now()).run();
      } else if (act === "activate") {
        const id = +form.get("id");
        await env.DB.batch([env.DB.prepare("UPDATE apk_versions SET is_active=0"), env.DB.prepare("UPDATE apk_versions SET is_active=1 WHERE id=?").bind(id)]);
      } else if (act === "delete") {
        const a = await env.DB.prepare("SELECT * FROM apk_versions WHERE id=?").bind(+form.get("id")).first();
        if (a && !a.is_active) { await env.APK.delete(a.storage_key); await env.DB.prepare("DELETE FROM apk_versions WHERE id=?").bind(a.id).run(); }
      }
      return redirect("/admin/apk");
    }
    const { results } = await env.DB.prepare("SELECT * FROM apk_versions ORDER BY id DESC").all();
    const rows = results.map(a => `<div class="card" style="margin-bottom:12px"><b>Shield VPN v${esc(a.version)}</b> ${a.is_active ? "<span style='color:#22d3ee'>● Active</span>" : ""}<br><small>${mb(a.file_size)} · Uploaded ${day(a.created_at)}<br>SHA-256: <span style="word-break:break-all">${a.checksum}</span><br>${esc(a.release_notes)}</small><div class="row" style="margin-top:10px">${a.is_active ? "" : `<form method="post" onsubmit="return confirm('Make version ${esc(a.version)} the active download?')">${csrf}<input type="hidden" name="action" value="activate"><input type="hidden" name="id" value="${a.id}"><button class="btn s">Set as active</button></form><form method="post" onsubmit="return confirm('Delete this version?')">${csrf}<input type="hidden" name="action" value="delete"><input type="hidden" name="id" value="${a.id}"><button class="btn s o">Delete</button></form>`}</div></div>`).join("");
    return admPage(ses, "APK Manager", `<form method="post" enctype="multipart/form-data" class="card" style="max-width:520px;margin-bottom:24px">${csrf}<input type="hidden" name="action" value="upload"><h3>Upload new APK</h3><label>Choose APK</label><input type="file" name="file" accept=".apk" required id="fi"><div id="fm" style="font-size:13px;color:#93a4c8"></div><label>Version</label><input name="version" placeholder="1.2.4" required><label>Release notes</label><textarea name="notes" rows="3"></textarea><button class="btn">Upload</button></form>
<script>document.getElementById("fi").onchange=async function(e){var f=e.target.files[0];if(!f)return;var h=await crypto.subtle.digest("SHA-256",await f.arrayBuffer());document.getElementById("fm").textContent=f.name+" · "+(f.size/1048576).toFixed(1)+" MB · SHA-256 "+[...new Uint8Array(h)].map(function(x){return x.toString(16).padStart(2,"0")}).join("")}</script>${rows || "<p>No versions yet.</p>"}`);
  }
  return null;
}

// ---------- router ----------
async function pub(req, env, url, p, s) {
  if (p === "/api/track" && req.method === "POST") return apiTrack(req, env, s);
  if (p === "/api/download" && req.method === "GET") return apiDownload(env, url, s);
  if (req.method !== "GET") return new Response("Method not allowed", { status: 405 });
  const pages = { "/": home, "/features": features, "/faq": faq, "/privacy": privacy, "/contact": contact };
  if (pages[p]) return pages[p](s);
  if (p === "/download") return downloadPage(s, env);
  if (p === "/download-unavailable") return errPage(s, "Unavailable", s.t.unavailable, s.t.back);
  return errPage(s, "404", s.t.e404, s.t.e404m);
}

const svgHeaders = { "content-type": "image/svg+xml", "cache-control": "public, max-age=86400" };
export default {
  async fetch(req, env) {
    const url = new URL(req.url), p = url.pathname.replace(/\/$/, "") || "/";
    try {
      if (p === "/favicon.svg") return new Response(LOGO.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '), { headers: svgHeaders });
      if (p === "/og.svg") return new Response(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><rect width="1200" height="630" fill="#050b1f"/><circle cx="950" cy="120" r="260" fill="#2563eb" opacity=".25"/><path d="M180 200l90 32v72c0 56-40 96-90 120-50-24-90-64-90-120v-72z" fill="url(#g)"/><text x="330" y="300" font-family="Arial" font-size="96" font-weight="700" fill="#fff">Shield VPN</text><text x="334" y="370" font-family="Arial" font-size="40" fill="#7dd3fc">Private. Simple. Free.</text></svg>`, { headers: svgHeaders });
      if (p.startsWith("/admin")) return (await admin(req, env, url, await getSettings(env))) || errPage(await getSettings(env), "404", "Page not found", "This page does not exist.");
      const s = await getSettings(env);
      const [lang, setC] = pickLang(req, url, s); s.lang = lang; s.t = T[lang];
      const host = req.headers.get("host") || url.host; s.origin = (/^localhost|^127\./.test(host) ? "http://" : "https://") + host;
      const res = await pub(req, env, url, p, s);
      if (setC) res.headers.append("set-cookie", `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`);
      return res;
    } catch (e) {
      console.error(e);
      const s2 = { ...(await getSettings(env).catch(() => DEFAULTS)), lang: "uz", t: T.uz }; return errPage(s2, "500", T.uz.e500, T.uz.e500m);
    }
  },
};
