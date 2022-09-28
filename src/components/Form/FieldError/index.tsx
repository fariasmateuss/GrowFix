import { useFormContext } from 'react-hook-form';

import { FieldErrorProps } from './types';

export function FieldError({ name }: FieldErrorProps) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  const error = errors[name];

  if (!error) return null;

  return <span>{error.message}</span>;
}
