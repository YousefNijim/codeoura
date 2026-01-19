'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string(),
  phoneNumber: z.string(),
  message: z.string(),
});

export async function handleContactForm(data: unknown) {
  try {
    const parsedData = contactFormSchema.parse(data);
    
    // In a real application, you would handle the data here:
    // - Send an email
    // - Save to a database
    // - Trigger a workflow
    console.log('Received contact form submission:');
    console.log(parsedData);

    // Simulate a short delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { success: true };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return { success: false };
  }
}
