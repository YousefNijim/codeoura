/**
 * حالة إرسال النموذج، في ملف مستقل حتى يشاركها الـ Server Action وبديله
 * الساكن دون أن يسحب أحدهما الآخر إلى حزمة البناء.
 */
export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  /** الاستضافة ساكنة: لا خادم يرسل، فيُسلَّم الأمر لبريد الزائر. */
  | { status: 'static' }
  | { status: 'error'; reason: 'validation' | 'rate-limit' | 'server' };
