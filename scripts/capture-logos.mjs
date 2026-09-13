/**
 * يلتقط شعار كل نظام من الديمو الحيّ الخاص به.
 *
 * لماذا لقطة للعنصر بدل تنزيل ملف الأيقونة: أغلب هذه الأنظمة تضع شعارها
 * كنص أو SVG داخل الترويسة، وأيقونة التبويب فيها إما عامّة (vite.svg) أو
 * ‎16px لا تصلح للعرض. لقطة العنصر المرسوم تعطي الشعار كما يراه المستخدم.
 *
 * الخلفية تُترك شفافة، فالشعار يُعرض على بطاقة الموقع لا على خلفية الديمو.
 *
 * الاستخدام:  node scripts/capture-logos.mjs [slug ...]
 */
import { spawn } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const DEMOS = 'https://ysweety666-crypto.github.io/codeoura-demos';

/** `settle` = انتظار حقيقي بعد التحميل، لتستقر الترويسة. */
const TARGETS = [
  { slug: 'glamora', url: `${DEMOS}/glamora/`, settle: 6000 },
  { slug: 'couponak', url: `${DEMOS}/couponak-inventory/dashboard/`, settle: 6000 },
  { slug: 'aber', url: `${DEMOS}/aber/admin/`, settle: 6000 },
  { slug: 'babunec', url: `${DEMOS}/babunec/tr/dashboard/`, settle: 6000 },
  { slug: 'firuze', url: `${DEMOS}/firuze-system/`, settle: 6000 },
  { slug: 'cleveland-medicals', url: `${DEMOS}/cleveland/ar/`, settle: 5000 },
  { slug: 'cafe-albaraa', url: `${DEMOS}/cafe-albaraa/`, settle: 6000 },
];

/**
 * يُنفَّذ داخل الصفحة: يبحث عن أقرب شيء إلى الشعار في أعلى اليسار/اليمين.
 * يفضّل صورة أو SVG داخل ترويسة، ثم يرجع مستطيلها.
 */
const FIND_MARK = `(() => {
  const inTop = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < 140 && r.width > 16 && r.height > 12 && r.width < 420 && r.height < 160;
  };
  const score = (el) => {
    const text = (el.getAttribute('alt') || el.getAttribute('class') || '') + (el.id || '');
    return /logo|brand|mark/i.test(text) ? 2 : 1;
  };
  const candidates = [...document.querySelectorAll('header img, nav img, header svg, nav svg, [class*=logo] img, [class*=logo] svg, img[alt*=logo i], img[class*=logo i]')]
    .filter(inTop)
    .sort((a, b) => score(b) - score(a) || b.getBoundingClientRect().width - a.getBoundingClientRect().width);
  const el = candidates[0];
  if (!el) return null;
  const r = el.getBoundingClientRect();
  const pad = 6;
  return JSON.stringify({
    x: Math.max(0, r.left - pad), y: Math.max(0, r.top - pad),
    width: r.width + pad * 2, height: r.height + pad * 2,
  });
})()`;

const CHROME = [
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find((path) => existsSync(path));

if (!CHROME) {
  console.error('لم يُعثر على متصفح Chromium لالتقاط اللقطات.');
  process.exit(1);
}

const OUT_DIR = resolve('public/brand/systems');
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

      await cdp.send('Runtime.enable', {}, sessionId);
      const probe = await cdp.send(
        'Runtime.evaluate',
        { expression: FIND_MARK, returnByValue: true },
        sessionId,
      );
      const rect = probe.result?.value ? JSON.parse(probe.result.value) : null;

      if (!rect) {
        console.warn(`  ⚠ ${slug}: لا يوجد شعار قابل للالتقاط في الترويسة`);
        failed += 1;
        continue;
      }

      // شفافية: الشعار سيوضع على بطاقة الموقع، لا على خلفية الديمو
      await cdp.send('Emulation.setDefaultBackgroundColorOverride', {
        color: { r: 0, g: 0, b: 0, a: 0 },
      }, sessionId);

      const { data } = await cdp.send(
        'Page.captureScreenshot',
        {
          format: 'png',
          captureBeyondViewport: true,
          clip: { ...rect, scale: 2 },
        },
        sessionId,
      );
      const buffer = Buffer.from(data, 'base64');

      if (buffer.length < 400) {
        console.warn(`  ⚠ ${slug}: لقطة فارغة`);
        failed += 1;
      } else {
        writeFileSync(resolve(OUT_DIR, `${slug}.png`), buffer);
        console.log(`  ✓ ${slug}: ${Math.round(rect.width)}×${Math.round(rect.height)} — ${(buffer.length / 1024).toFixed(0)}KB`);
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
