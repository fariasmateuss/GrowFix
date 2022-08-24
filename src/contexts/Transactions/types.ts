export type TransactionsProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

export type TransactionInput = Omit<TransactionsProps, 'id' | 'createdAt'>;

export type TransactionStateContextData = {
  transactions: TransactionsProps[];
};

export type TransactionDispatchContextData = {
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
};
