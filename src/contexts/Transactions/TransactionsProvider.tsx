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
    api
      .get(`/transactions`)
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function handleCreateTransaction(transactionInput: TransactionInput) {
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
      createTransaction: handleCreateTransaction,
    }),
    [handleCreateTransaction],
  );

  return (
    <TransactionStateProvider value={transactionState}>
      <TransactionDispatchProvider value={transactionDispatch}>
        {children}
      </TransactionDispatchProvider>
    </TransactionStateProvider>
  );
}
