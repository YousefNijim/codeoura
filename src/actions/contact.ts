'use server';

import { headers } from 'next/headers';
import { Resend } from 'resend';

import { company } from '@/content/company';
import { pruneRateLimit, rateLimit } from '@/lib/rate-limit';
import { contactSchema } from '@/lib/validations';

export type { ContactState } from './contact-state';
import type { ContactState } from './contact-state';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const INQUIRY_TO = process.env.CONTACT_INBOX ?? company.email;
const INQUIRY_FROM = process.env.CONTACT_FROM ?? 'Codeoura <onboarding@resend.dev>';

export async function submitInquiry(input: unknown): Promise<ContactState> {
  const parsed = contactSchema.safeParse(input);

  // A filled honeypot is a bot. Report success so it learns nothing.
  if (!parsed.success) {
    return { status: 'error', reason: 'validation' };
  }
  if (parsed.data.website) {
    return { status: 'success' };
  }

  const headerList = await headers();
  const ip =
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headerList.get('x-real-ip') ??
    'unknown';

  pruneRateLimit();
  if (!rateLimit(ip).ok) {
    return { status: 'error', reason: 'rate-limit' };
  }

  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set — inquiry was not sent.');
    return { status: 'error', reason: 'server' };
  }

  const { name, email, company: org, budget, message } = parsed.data;

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: INQUIRY_FROM,
      to: INQUIRY_TO,
      replyTo: email,
      subject: `New inquiry — ${name}${org ? ` (${org})` : ''}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${org || '—'}`,
        `Budget:  ${budget || '—'}`,
        '',
        message,
      ].join('\n'),
    });

    if (error) {
      console.error('[contact] Resend rejected the message:', error);
      return { status: 'error', reason: 'server' };
    }

    return { status: 'success' };
  } catch (error) {
    console.error('[contact] Unexpected failure:', error);
    return { status: 'error', reason: 'server' };
  }
}
