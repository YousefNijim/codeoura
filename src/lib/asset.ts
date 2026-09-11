/**
 * يبني مساراً لملف ساكن مع احترام basePath.
 *
 * ضروري لأن next/image لا يضيف basePath إلى src عندما تكون الصور
 * unoptimized — وهو الوضع الوحيد الممكن في التصدير الساكن. النتيجة بدون
 * هذا: صورة مكسورة على أي نشر تحت مسار فرعي، دون أي خطأ في البناء.
 *
 * يُقرأ المتغيّر بسابقة NEXT_PUBLIC حتى يصل إلى مكوّنات العميل أيضاً.
 * فارغ في النشر العادي، فلا يتغيّر شيء.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  return `${basePath}${path}`;
}
