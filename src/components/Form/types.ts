import { ComponentProps } from 'react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export type FormProps<T extends FieldValues = any> = Omit<
  ComponentProps<'form'>,
  'onSubmit'
> & {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
};
