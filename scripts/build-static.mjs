/**
 * بناء نسخة ساكنة من الموقع (output: 'export') للاستضافة على ملفات ثابتة.
 *
 * المشكلة التي يحلّها هذا السكربت:
 * Next يرفض `output: 'export'` إذا وُجد Server Action في الحزمة المبنية. لا
 * يكفي استبدال المسار بـ webpack alias — الرصد يتم على المخرجات لا على
 * شجرة الاستيراد. الحل الوحيد الموثوق هو ألّا يحمل الملف 'use server' أثناء
 * هذا البناء تحديداً.
 *
 * لذلك يُبدَّل محتوى الملف مؤقتاً، ثم يُعاد كما كان في كل الحالات — بما فيها
 * فشل البناء أو مقاطعته بـ Ctrl+C — حتى لا تبقى شجرة العمل معدَّلة أبداً.
 */
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ACTION = resolve('src/actions/contact.ts');
const STUB = resolve('src/actions/contact.static.ts');

const original = readFileSync(ACTION, 'utf8');
const stub = readFileSync(STUB, 'utf8');

let restored = false;
function restore() {
  if (restored) return;
  restored = true;
  writeFileSync(ACTION, original, 'utf8');
  console.log('[build:static] أُعيد Server Action الأصلي.');
}

// يغطي الإنهاء المفاجئ كما يغطي الخروج الطبيعي
process.on('exit', restore);
process.on('SIGINT', () => { restore(); process.exit(130); });
process.on('SIGTERM', () => { restore(); process.exit(143); });

try {
  writeFileSync(ACTION, stub, 'utf8');
  console.log('[build:static] استُبدل Server Action ببديل ساكن.');

  execSync('next build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      STATIC_EXPORT: '1',
      NEXT_PUBLIC_STATIC_EXPORT: '1',
      NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH ?? '',
    },
  });
  writeRootRedirect();
} finally {
  restore();
}

/**
 * يولّد out/index.html.
 *
 * التوجيه بين اللغات يتم عادة في middleware، وهو لا يعمل إطلاقاً في التصدير
 * الساكن — فبدون هذه الصفحة يصطدم الزائر بـ 404 على الصفحة الرئيسية نفسها.
 *
 * تحترم الصفحة لغة المتصفح، ومعها meta refresh حتى تعمل بلا جافاسكربت.
 */
function writeRootRedirect() {
  const basePath = process.env.BASE_PATH ?? '';
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Codeoura</title>
<link rel="canonical" href="${basePath}/en/">
<meta http-equiv="refresh" content="0; url=${basePath}/en/">
<script>
  var lang = (navigator.language || 'en').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  location.replace('${basePath}/' + lang + '/');
</script>
</head>
<body>
<p>Redirecting to <a href="${basePath}/en/">Codeoura</a>.</p>
</body>
</html>
`;

  writeFileSync(resolve('out/index.html'), html, 'utf8');
  // يمنع GitHub Pages من معالجة المخرجات بـ Jekyll، وهو يتجاهل مجلد _next
  writeFileSync(resolve('out/.nojekyll'), '', 'utf8');
  console.log('[build:static] كُتبت صفحة تحويل الجذر و .nojekyll');
}
