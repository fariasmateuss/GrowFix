import { useEffect, useState } from 'react';
import noops from 'lodash.noop';

import { api } from '@config/client';
import { formatPrice } from '@utils/formatPrice';

import { formatDateTime } from '@utils/dateTimeFormat';
import { Transactions } from './types';
import styles from './styles.module.scss';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get(`/transactions`)
      .then(response => setTransactions(response.data.transactions))
      .catch(noops);
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.tableWrap}>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Categories</th>
          <th>Date</th>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formatPrice(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDateTime(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
