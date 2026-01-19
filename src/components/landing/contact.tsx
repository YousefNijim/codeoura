'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { useMouseSpotlight } from '@/hooks/use-mouse-spotlight';
import { useFirebase, addDocumentNonBlocking, initiateAnonymousSignIn } from '@/firebase';
import { collection, serverTimestamp } from 'firebase/firestore';


const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();
  const spotlightRef = useMouseSpotlight<HTMLElement>();
  const { firestore, auth, user, isUserLoading } = useFirebase();

  useEffect(() => {
    if (auth && !user && !isUserLoading) {
      initiateAnonymousSignIn(auth);
    }
  }, [auth, user, isUserLoading]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      message: '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    if (!firestore || !auth?.currentUser) {
      toast({
        variant: 'destructive',
        title: t('contact.toast.errorTitle'),
        description: "Database connection not available. Please try again later.",
      });
      setIsSubmitting(false);
      return;
    }
    
    const inquiriesCollection = collection(firestore, 'inquiries');
    addDocumentNonBlocking(inquiriesCollection, {
      ...values,
      submittedAt: serverTimestamp(),
      userId: auth.currentUser.uid,
    });

    toast({
      title: t('contact.toast.successTitle'),
      description: t('contact.toast.successDescription'),
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section ref={spotlightRef} id="contact" className="py-20 sm:py-32 spotlight-effect">
      <div className="container">
        <div className="mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="items-center text-center">
              <CardTitle className="font-headline">{t('contact.form.title')}</CardTitle>
              <CardDescription>{t('contact.form.description')}</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.name')}</FormLabel>
                        <FormControl>
                          <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.phoneNumber')}</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder={t('contact.form.phoneNumberPlaceholder')} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('contact.form.message')}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t('contact.form.messagePlaceholder')} rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting || isUserLoading}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
