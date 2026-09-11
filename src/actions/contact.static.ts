/**
 * بديل ساكن لـ contact.ts.
 *
 * يُستبدل به الـ Server Action عند البناء بوضع التصدير الساكن (انظر الـ alias
 * في next.config.ts)، لأن الاستضافة الساكنة لا تشغّل كوداً على الخادم.
 *
 * لا يحمل 'use server' عن قصد: وجوده وحده يُفشل بناء output: 'export'.
 * النموذج في هذه الحالة يسلّم الرسالة لبريد الزائر بدل إرسالها من الخادم،
 * فلا يصل الزائر إلى زر لا يفعل شيئاً.
 */
import type { ContactState } from './contact-state';

// التوقيع يطابق الـ Server Action الحقيقي، والمعامل غير مستخدم عمداً:
// لا خادم هنا يقرأه.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function submitInquiry(input?: unknown): Promise<ContactState> {
  return { status: 'static' };
}
