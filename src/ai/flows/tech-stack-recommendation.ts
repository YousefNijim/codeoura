'use server';

/**
 * @fileOverview An AI tool to recommend the best tech stack or platform for a project.
 *
 * - techStackRecommendation - A function that handles the tech stack recommendation process.
 * - TechStackRecommendationInput - The input type for the techStackRecommendation function.
 * - TechStackRecommendationOutput - The return type for the techStackRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TechStackRecommendationInputSchema = z.object({
  businessGoals: z
    .string()
    .describe('The business goals of the project.'),
  availableFeatures: z.string().describe('The available features for the project.'),
  userPreferences: z.string().describe('The user preferences for the project.'),
});
export type TechStackRecommendationInput = z.infer<
  typeof TechStackRecommendationInputSchema
>;

const TechStackRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('The recommended tech stack or platform.'),
  reasoning: z.string().describe('The reasoning behind the recommendation.'),
});
export type TechStackRecommendationOutput = z.infer<
  typeof TechStackRecommendationOutputSchema
>;

export async function techStackRecommendation(
  input: TechStackRecommendationInput
): Promise<TechStackRecommendationOutput> {
  return techStackRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'techStackRecommendationPrompt',
  input: {schema: TechStackRecommendationInputSchema},
  output: {schema: TechStackRecommendationOutputSchema},
  prompt: `You are an AI expert in recommending the best tech stack or platform for a given project.

You will use the provided business goals, available features, and user preferences to determine the most appropriate technologies to use.
Incorporate business rules and user preferences into your output.

Business Goals: {{{businessGoals}}}
Available Features: {{{availableFeatures}}}
User Preferences: {{{userPreferences}}}

Recommendation:`,
});

const techStackRecommendationFlow = ai.defineFlow(
  {
    name: 'techStackRecommendationFlow',
    inputSchema: TechStackRecommendationInputSchema,
    outputSchema: TechStackRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
