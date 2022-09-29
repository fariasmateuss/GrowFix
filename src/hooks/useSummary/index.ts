import { useTransactionState } from '@contexts/Transactions/TransactionsContext';
import { useMemo } from 'react';

export function useSummary() {
  const { transactions } = useTransactionState();

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === `deposit`) {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
          } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
          }

          return acc;
        },
        {
          deposit: 0,
          withdraw: 0,
          total: 0,
        },
      ),
    [transactions],
  );

  return { summary };
}
