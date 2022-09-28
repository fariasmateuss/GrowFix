import { UseFormProps as UseHookFormProps } from 'react-hook-form';
import { TypeOf, ZodSchema } from 'zod';

export type UseFormProps<T extends ZodSchema<any>> = UseHookFormProps<
  TypeOf<T>
> & {
  schema: T;
};
