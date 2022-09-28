import * as z from 'zod';
import { searchFormSchema } from './schemas';

export type SearchFormValues = z.infer<typeof searchFormSchema>;
