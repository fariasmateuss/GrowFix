export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export type TransactionStateContextData = {
  transactions: Transaction[];
};

export type TransactionDispatchContextData = {
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
  getTransaction: (query: string) => Promise<void>;
};
