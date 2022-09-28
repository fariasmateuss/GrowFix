import { api } from '@config/client';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import {
  TransactionDispatchProvider,
  TransactionStateProvider,
} from './TransactionsContext';
import { TransactionInput, TransactionsProps } from './types';

export function TransactionProvider({ children }: PropsWithChildren<unknown>) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get(`/transactions`).then(response => setTransactions(response.data));
  }, []);

  const getTransaction = async (query?: string) => {
    const response = await api.get(`/transactions`, {
      params: {
        q: query,
        _sort: `createdAt`,
        _order: `desc`,
      },
    });
    const data = await response.data;

    setTransactions(data);
  };

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post(`/transactions`, {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  const transactionState = useMemo(
    () => ({
      transactions,
    }),
    [transactions],
  );

  const transactionDispatch = useMemo(
    () => ({
      createTransaction,
      getTransaction,
    }),
    [createTransaction, getTransaction],
  );

  return (
    <TransactionStateProvider value={transactionState}>
      <TransactionDispatchProvider value={transactionDispatch}>
        {children}
      </TransactionDispatchProvider>
    </TransactionStateProvider>
  );
}
