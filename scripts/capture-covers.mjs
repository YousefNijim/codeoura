/**
 * يلتقط لقطات حقيقية من الديموهات الحية لتكون أغلفة المشاريع.
 *
 * لماذا لقطة حقيقية بدل تدرّج لوني بالاسم: بطاقة تعرض اسم المشروع على خلفية
 * ملوّنة لا تقول للزائر شيئاً عن المنتج. اللقطة تقوله في لحظة.
 *
 * لماذا بروتوكول DevTools بدل الوسيط ‎--screenshot المباشر: ذاك يعتمد على
 * ‎--virtual-time-budget الذي يقفز بالزمن الافتراضي ولا ينتظر انتهاء أنيميشن
 * الرسوم البيانية، فتُلتقط محاور بلا أعمدة — لقطة تبدو كصفحة معطوبة. هنا
 * ننتظر زمناً حقيقياً بعد اكتمال التحميل.
 *
 * الاستخدام:  node scripts/capture-covers.mjs [slug ...]
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const DEMOS = 'https://ysweety666-crypto.github.io/codeoura-demos';

/** `settle` = انتظار حقيقي بعد التحميل، لتستقر الرسوم والأنيميشن. */
const TARGETS = [
  { slug: 'glamora', url: `${DEMOS}/glamora/`, settle: 6000 },
  { slug: 'cafe-albaraa', url: `${DEMOS}/cafe-albaraa/`, settle: 6000 },
  { slug: 'firuze', url: `${DEMOS}/firuze-menu/`, settle: 4000 },
  { slug: 'couponak', url: `${DEMOS}/couponak-inventory/dashboard/`, settle: 6000 },
  { slug: 'babunec', url: `${DEMOS}/babunec/tr/dashboard/`, settle: 6000 },
  { slug: 'firuze-system', url: `${DEMOS}/firuze-system/`, settle: 6000 },
  { slug: 'cleveland-medicals', url: `${DEMOS}/cleveland/ar/`, settle: 5000 },
];

const CHROME = [
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((path) => existsSync(path));

if (!CHROME) {
  console.error('لم يُعثر على متصفح Chromium لالتقاط اللقطات.');
  process.exit(1);
}

const OUT_DIR = resolve('public/work');
mkdirSync(OUT_DIR, { recursive: true });

const PORT = 9333;
const profile = mkdtempSync(join(tmpdir(), 'cover-shot-'));

const chrome = spawn(
  CHROME,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--no-first-run',
    `--user-data-dir=${profile}`,
    `--remote-debugging-port=${PORT}`,
    '--window-size=1440,900',
    'about:blank',
  ],
  { stdio: 'ignore' },
);

const sleep = (ms) => new Promise((done) => setTimeout(done, ms));

/** ينتظر توفّر نقطة DevTools بدل افتراض مدة إقلاع ثابتة. */
async function waitForDevTools() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (response.ok) return (await response.json()).webSocketDebuggerUrl;
    } catch {
      // المتصفح لم يفتح المنفذ بعد
    }
    await sleep(250);
  }
  throw new Error('تعذّر الاتصال ببروتوكول DevTools');
}

/** غلاف رفيع حول CDP: إرسال أمر وانتظار رده بالمعرّف نفسه. */
function connect(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  let nextId = 1;

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    const waiter = pending.get(message.id);
    if (!waiter) return;
    pending.delete(message.id);
    message.error ? waiter.reject(new Error(message.error.message)) : waiter.resolve(message.result);
  });

  const ready = new Promise((done, fail) => {
    socket.addEventListener('open', done, { once: true });
    socket.addEventListener('error', () => fail(new Error('فشل فتح قناة DevTools')), { once: true });
  });

  return {
    ready,
    send(method, params = {}, sessionId) {
      const id = nextId++;
      return new Promise((resolve_, reject) => {
        pending.set(id, { resolve: resolve_, reject });
        socket.send(JSON.stringify({ id, method, params, sessionId }));
      });
    },
    close: () => socket.close(),
  };
}

let failed = 0;

try {
  const wsUrl = await waitForDevTools();
  const cdp = connect(wsUrl);
  await cdp.ready;

  const only = process.argv.slice(2);
  const targets = only.length ? TARGETS.filter((t) => only.includes(t.slug)) : TARGETS;

  for (const { slug, url, settle } of targets) {
    const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });

    try {
      await cdp.send('Page.enable', {}, sessionId);
      await cdp.send('Emulation.setDeviceMetricsOverride', {
        // 16:10 ليطابق نسبة بطاقة المشروع، فلا تُقصّ اللقطة عند العرض
        width: 1440, height: 900, deviceScaleFactor: 1, mobile: false,
      }, sessionId);

      await cdp.send('Page.navigate', { url }, sessionId);
      await sleep(settle);

      // WebP بجودة 80: لقطة PNG لواجهة فيها صور تتجاوز ميغابايت، وهذه أغلفة
      // تُعرض بعرض بضع مئات من البكسلات. لا مُحسِّن صور في التصدير الساكن،
      // فالتحسين يجب أن يحدث هنا.
      const { data } = await cdp.send(
        'Page.captureScreenshot',
        { format: 'webp', quality: 80 },
        sessionId,
      );
      const buffer = Buffer.from(data, 'base64');

      // ملف صغير جداً يعني صفحة بيضاء التُقطت قبل أن تُرسم
      if (buffer.length < 8_000) {
        console.warn(`  ⚠ ${slug}: ${(buffer.length / 1024).toFixed(0)}KB — يبدو أن الصفحة لم تُرسم`);
        failed += 1;
      } else {
        writeFileSync(resolve(OUT_DIR, `${slug}.webp`), buffer);
        console.log(`  ✓ ${slug}: ${(buffer.length / 1024).toFixed(0)}KB`);
      }
    } catch (error) {
      console.error(`  ✗ ${slug}: ${error.message}`);
      failed += 1;
    } finally {
      await cdp.send('Target.closeTarget', { targetId });
    }
  }

  cdp.close();
} finally {
  chrome.kill();
  // ويندوز يُبقي ملفات الملف الشخصي مقفلة لحظة بعد إغلاق المتصفح. فشل الحذف
  // لا يعني فشل الالتقاط، فلا يجوز أن يُسقط السكربت بعد نجاح العمل.
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    // يتولّاه النظام عند تنظيف المجلد المؤقت
  }
}

process.exit(failed > 0 ? 1 : 0);
