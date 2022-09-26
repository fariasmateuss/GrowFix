import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useHookForm } from 'react-hook-form';
import { ZodSchema } from 'zod';

import { UseFormProps } from './types';

export const useForm = <T extends ZodSchema<any>>({
  schema,
  ...formConfig
}: UseFormProps<T>) =>
  useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
