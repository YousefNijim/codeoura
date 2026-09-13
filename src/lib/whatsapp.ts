import { company } from '@/content/company';

/**
 * Builds a WhatsApp link that opens the chat with the message already typed.
 *
 * wa.me wants the number as digits only — a leading plus or any separator
 * gives an "invalid number" page rather than an error we could catch. The
 * message is encoded rather than passed raw so line breaks and Arabic
 * punctuation survive the redirect.
 */
export function whatsappLink(message: string): string {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
