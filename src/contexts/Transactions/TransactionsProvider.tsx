import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';

import { api } from '@config/client';

import {
  TransactionDispatchProvider,
  TransactionStateProvider,
} from './TransactionsContext';
import { TransactionInput, Transaction } from './types';

export function TransactionProvider({ children }: PropsWithChildren<unknown>) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get(`/transactions`).then(response => setTransactions(response.data));
  }, []);

  const getTransaction = useCallback(async (query?: string) => {
    const response = await api.get(`/transactions`, {
      params: {
        q: query,
        _sort: `createdAt`,
        _order: `desc`,
      },
    });
    const data = await response.data;

    setTransactions(data);
  }, []);

  const createTransaction = useCallback(
    async (transactionInput: TransactionInput) => {
      const response = await api.post(`/transactions`, {
        ...transactionInput,
        createdAt: new Date(),
      });

      setTransactions(prevState => [response.data, ...prevState]);
    },
    [],
  );

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
