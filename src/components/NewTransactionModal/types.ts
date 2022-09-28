import * as z from 'zod';
import { newTransactionFormSchema } from './schemas';

export type NewTransationModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export type TransactionType = 'deposit' | 'withdraw';

export type NewTransactionFormValues = z.infer<typeof newTransactionFormSchema>;
