import { ComponentProps } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFormContext,
  UseFormReturn,
} from 'react-hook-form';

interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

export function FieldError({ name }: { name?: string }) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return <span>{error.message}</span>;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      <fieldset disabled={form.formState.isSubmitting}>{children}</fieldset>
    </form>
  </FormProvider>
);
