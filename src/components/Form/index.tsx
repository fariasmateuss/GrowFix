import { FieldValues, FormProvider } from 'react-hook-form';

import { FormProps } from './types';

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      {children}
    </form>
  </FormProvider>
);
