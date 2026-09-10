'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { submitInquiry } from '@/actions/contact';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { createContactSchema } from '@/lib/validations';

export function ContactForm() {
  const t = useTranslations('contact');
  const tv = useTranslations('contact.validation');
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [sent, setSent] = useState(false);

  const schema = createContactSchema(tv);
  type Values = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      budget: '',
      message: '',
      website: '',
    },
  });

  const onSubmit = (values: Values) =>
    startTransition(async () => {
      const result = await submitInquiry(values);

      if (result.status === 'success') {
        setSent(true);
        reset();
        toast({
          title: t('success.title'),
          description: t('success.description'),
        });
        return;
      }

      toast({
        variant: 'destructive',
        title: t('error.title'),
        description: t('error.description'),
      });
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {/* Honeypot: off-screen, not hidden, so bots that check visibility still fill it */}
      <div aria-hidden className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={t('form.name')}
          placeholder={t('form.namePlaceholder')}
          error={errors.name?.message}
          required
          {...register('name')}
        />
        <Field
          id="email"
          type="email"
          label={t('form.email')}
          placeholder={t('form.emailPlaceholder')}
          error={errors.email?.message}
          required
          {...register('email')}
        />
        <Field
          id="company"
          label={t('form.company')}
          placeholder={t('form.companyPlaceholder')}
          error={errors.company?.message}
          {...register('company')}
        />
        <Field
          id="budget"
          label={t('form.budget')}
          placeholder={t('form.budgetPlaceholder')}
          error={errors.budget?.message}
          {...register('budget')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">
          {t('form.message')}
          <RequiredMark label={t('form.required')} />
        </Label>
        <Textarea
          id="message"
          placeholder={t('form.messagePlaceholder')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isPending}
        className="w-full sm:w-fit"
      >
        {isPending ? (
          <>
            <Loader2 aria-hidden className="animate-spin" />
            {t('form.submitting')}
          </>
        ) : (
          <>
            <Send aria-hidden />
            {t('form.submit')}
          </>
        )}
      </Button>

      {/* Announced to screen readers without stealing focus */}
      <p role="status" aria-live="polite" className="sr-only">
        {sent ? t('success.description') : ''}
      </p>
    </form>
  );
}

const Field = ({
  id,
  label,
  error,
  required,
  ...props
}: React.ComponentProps<typeof Input> & {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={id}>
      {label}
      {required && <RequiredMark label="" />}
    </Label>
    <Input
      id={id}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
    />
    <FieldError id={`${id}-error`} message={error} />
  </div>
);
Field.displayName = 'Field';

function RequiredMark({ label }: { label: string }) {
  return (
    <span className="text-accent" aria-hidden={!label}>
      {' *'}
      {label && <span className="sr-only">{label}</span>}
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-destructive">
      {message}
    </p>
  );
}
