import { formatPrice } from '@utils/formatPrice';
import { formatDateTime } from '@utils/dateTimeFormat';
import { useTransactionState } from '@contexts/Transactions/TransactionsContext';

import styles from './styles.module.scss';

export function TransactionsTable() {
  const { transactions } = useTransactionState();

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
              <td className={styles[transaction.type]}>
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
