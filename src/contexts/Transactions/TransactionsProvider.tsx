import {
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import noop from 'lodash.noop';

import { api } from '@config/client';

import {
  TransactionDispatchProvider,
  TransactionStateProvider,
} from './TransactionsContext';
import { TransactionInput, Transaction } from './types';

export function TransactionProvider({ children }: PropsWithChildren<unknown>) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const subscription = new AbortController();

    api
      .get(`/transactions`, {
        signal: subscription.signal,
      })
      .then(response => setTransactions(response.data))
      .catch(noop);

    return () => subscription.abort();
  }, []);

  const getTransaction = useCallback(async (query?: string) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await api
      .get(`/transactions`, {
        params: {
          q: query,
          _sort: `createdAt`,
          _order: `desc`,
        },
      })
      .then(response => {
        clearTimeout(timeoutId);
        setTransactions(response.data);
      })
      .catch(noop);
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
