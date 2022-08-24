import { createContext, useContext } from 'react';

import {
  TransactionStateContextData,
  TransactionDispatchContextData,
} from './types';

export const TransactionStateContext = createContext<
  TransactionStateContextData | undefined
>(undefined);
export const TransactionDispatchContext = createContext<
  TransactionDispatchContextData | undefined
>(undefined);

export const TransactionStateProvider = TransactionStateContext.Provider;
export const TransactionDispatchProvider = TransactionDispatchContext.Provider;

export function useTransactionState() {
  const context = useContext(TransactionStateContext);

  if (!context) {
    throw new Error(
      `useTransactionState must be used within a TransactionProvider`,
    );
  }

  return context;
}

export function useTransactionDispatch() {
  const context = useContext(TransactionDispatchContext);

  if (!context) {
    throw new Error(
      `useTransactionDispatch must be within TransactionProvider`,
    );
  }

  return context;
}
