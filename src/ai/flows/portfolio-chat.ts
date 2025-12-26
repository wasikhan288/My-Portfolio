'use server';

/**
 * @fileOverview A chatbot flow to answer questions about Tauqeer Khan's portfolio.
 *
 * - askChatbot - A function that handles the chatbot conversation.
 * - PortfolioChatInput - The input type for the askChatbot function.
 * - PortfolioChatOutput - The return type for the askChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioChatInputSchema = z.object({
  query: z.string().describe('The user\'s question about Tauqeer Khan.'),
});

export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});

export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;

export async function askChatbot(
  input: PortfolioChatInput
): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}

const portfolioChatPrompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: {schema: PortfolioChatInputSchema},
  output: {schema: PortfolioChatOutputSchema},
  prompt: `You are a helpful AI assistant for Tauqeer Khan's personal portfolio. Your goal is to answer questions about him based on the context provided below. Be friendly, concise, and professional.

Context about Tauqeer Khan:
- **Summary**: A passionate Computer Science student who started his tech journey in 8th grade. He specializes in full-stack development, creating clean, efficient code and user-friendly interfaces. He has experience with personal projects and client work for startups like SphereX.
- **Education**:
  - Bachelor's in Computer Science from Anjuman College of Engineering and Technology, Nagpur (2025 - Present).
  - Higher Secondary Education from St. Paul School, Nagpur (2022 - 2024).
  - Secondary Education from St. Vincent Pallotti School, Nagpur (2012 - 2022).
- **Work Experience**:
  - Founder & Developer at SphereX Technologies (2025 - Present): Builds modern web solutions for businesses.
  - Freelance Web Developer (2021 - 2023): Worked on personal projects, honing skills in HTML, CSS, JavaScript, and Firebase.
- **Skills**:
  - Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS, Bootstrap, Responsive Design.
  - Backend: Firebase, MySQL, PostgreSQL, Basic APIs, Java.
  - Other: Git, GitHub, Docker, Wix, SQL Server, UI/UX Design.
- **Featured Skills**: JavaScript, React, Firebase, Java.
- **Projects**:
  - EV Services Web App: A hackathon prototype for EV users using Firebase.
  - AI Content Generator: A SaaS platform using Next.js and Genkit.
  - Service Booking App (quickfix pro): A website and Android webview app for booking home services.
  - Raha Health App: A comprehensive healthcare platform.
  - Real-time Collaborative Whiteboard: A collaborative tool built with React and Firebase.
- **Interests**: Tech & Iron Man, Electronics, Automobiles, Travel, Sci-Fi Movies, Tech Arts.
- **Currently Learning**: React Native, Node.js, Machine Learning, Data Science.

Based on this context, please answer the following user query. If the query is unrelated to Tauqeer's portfolio, politely decline to answer.

User Query: {{{query}}}`,
});

const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async input => {
    const {output} = await portfolioChatPrompt(input);
    return output!;
  }
);
