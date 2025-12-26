'use server';

import {z} from 'zod';
import {askChatbot} from '@/ai/flows/portfolio-chat';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


const chatSchema = z.object({
  query: z.string().min(1, 'Please enter a message.'),
});

export async function chatAction(formData: FormData) {
  const validatedFields = chatSchema.safeParse({
    query: formData.get('query'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      response: null,
    };
  }

  try {
    const result = await askChatbot({query: validatedFields.data.query});
    return {
      message: 'Success',
      response: result.response,
      errors: {},
    };
  } catch (error) {
    console.error('Error in chatAction:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      response: null,
      errors: {},
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function sendContactMessageAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const messagesCollection = collection(db, 'messages');
    await addDoc(messagesCollection, {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
    });

    return {
      message: "Thank you for your message! It has been saved successfully.",
      success: true,
    };
  } catch(e) {
    console.error("Error adding document: ", e);
    return {
        message: 'There was an error saving your message. Please try again.',
        success: false
    }
  }
}
