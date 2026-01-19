'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { techStackRecommendation, type TechStackRecommendationOutput } from '@/ai/flows/tech-stack-recommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  businessGoals: z.string().min(10, 'Please describe your business goals in at least 10 characters.'),
  availableFeatures: z.string().min(10, 'Please list some features, at least 10 characters.'),
  userPreferences: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiToolSection() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TechStackRecommendationOutput | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessGoals: '',
      availableFeatures: '',
      userPreferences: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    setResult(null);
    try {
      const recommendation = await techStackRecommendation(values);
      setResult(recommendation);
    } catch (error) {
      console.error('Error getting recommendation:', error);
      // You could add a toast notification here to inform the user of the error
    }
    setLoading(false);
  }

  return (
    <section id="ai-tool" className="py-20 sm:py-32 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <Wand2 className="inline-block h-4 w-4 mr-1" />
                AI-Powered Assistant
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Your Perfect Tech Stack
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Describe your project, and our AI will recommend the most suitable technology platform for your needs.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle className="font-headline">Project Details</CardTitle>
                  <CardDescription>Fill in the details below to get your recommendation.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="businessGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Goals</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Launch an MVP for an e-commerce platform within 3 months, focusing on scalability." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="availableFeatures"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Key Features</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., User authentication, product catalog, shopping cart, payment gateway integration." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="userPreferences"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>User Preferences (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Prefer open-source technologies, must integrate with Stripe." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={loading} className="w-full">
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Generate Recommendation'
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
          
          <div className="min-h-[300px] flex items-center justify-center">
            {loading && (
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="font-headline text-lg">Our AI is thinking...</p>
                <p>This may take a moment.</p>
              </div>
            )}
            {result && !loading && (
              <Card className="w-full animate-fade-in">
                <CardHeader>
                  <CardTitle className="font-headline text-accent flex items-center gap-2">
                    <CheckCircle className="h-6 w-6"/>
                    AI Recommendation
                  </CardTitle>
                  <CardDescription>
                    Based on your input, here is our suggestion.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-primary">{result.recommendation}</h4>
                    <p className="text-muted-foreground">{result.reasoning}</p>
                  </div>
                </CardContent>
              </Card>
            )}
            {!result && !loading && (
                 <div className="text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                    <Wand2 className="mx-auto h-12 w-12 mb-4" />
                    <h3 className="font-headline text-lg font-semibold">Your recommendation will appear here</h3>
                    <p>Fill out the form to get started.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
