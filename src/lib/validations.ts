import { z } from 'zod';

/**
 * Contact schema.
 *
 * `contactSchema` is the server's source of truth. `createContactSchema` wraps
 * it with translated messages for client-side display — same shape, same rules,
 * so the two can never drift.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(120).optional().or(z.literal('')),
  budget: z.string().trim().max(60).optional().or(z.literal('')),
  message: z.string().trim().min(20).max(4000),
  /** Honeypot — hidden from users, irresistible to bots. Must stay empty. */
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function createContactSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().trim().min(2, t('nameMin')).max(100),
    email: z.string().trim().email(t('emailInvalid')).max(200),
    company: z.string().trim().max(120).optional().or(z.literal('')),
    budget: z.string().trim().max(60).optional().or(z.literal('')),
    message: z.string().trim().min(20, t('messageMin')).max(4000, t('messageMax')),
    website: z.string().max(0).optional().or(z.literal('')),
  });
}
