import income from '@assets/income.svg';
import outcome from '@assets/outcome.svg';
import total from '@assets/total.svg';
import { useTransactionState } from '@contexts/Transactions/TransactionsContext';
import { formatPrice } from '@utils/formatPrice';

import styles from './styles.module.scss';

export function Summary() {
  const { transactions } = useTransactionState();

  const summary = transactions.reduce(
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
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p>Growth</p>
          <img src={income} aria-hidden alt="Growth" />
        </header>
        <strong className={styles.value}>{formatPrice(summary.deposit)}</strong>
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <p>Outcome</p>
          <img src={outcome} aria-hidden alt="Out come" />
        </header>
        <strong className={styles.value}>
          {formatPrice(summary.withdraw)}
        </strong>
      </div>

      <div className={styles.hightlight}>
        <header className={styles.header}>
          <p>Current Wallet Value</p>
          <img src={total} aria-hidden alt="Current Wallet Value" />
        </header>
        <strong className={styles.value}>{formatPrice(summary.total)}</strong>
      </div>
    </div>
  );
}
