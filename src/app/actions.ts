'use server';

export async function handleContactForm(data: unknown) {
  // This server action is no longer used for form submission.
  // The logic has been moved to the client-side component
  // `src/components/landing/contact.tsx` to integrate with the
  // Firebase client SDK for direct Firestore writes.
  console.log('handleContactForm is deprecated. Submission handled on client.');
  return { success: true };
}
