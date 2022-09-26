import * as z from 'zod';

export const newTransactionFormSchema = z.object({
  title: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum([`deposit`, `withdraw`]),
});
