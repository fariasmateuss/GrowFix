import Income from '@assets/income.svg';
import Outcome from '@assets/outcome.svg';
import Wallet from '@assets/wallet.svg';
import { useSummary } from '@hooks/useSummary';
import { formatPrice } from '@utils/formatPrice';

import styles from './styles.module.scss';

export function Summary() {
  const { summary } = useSummary();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p>Growth</p>
          <img src={Income} aria-hidden alt="Income" />
        </header>
        <strong className={styles.value}>{formatPrice(summary.deposit)}</strong>
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <p>Outcome</p>
          <img src={Outcome} aria-hidden alt="Outcome" />
        </header>
        <strong className={styles.value}>
          {formatPrice(summary.withdraw)}
        </strong>
      </div>

      <div className={styles.hightlight}>
        <header className={styles.header}>
          <p>Current Wallet</p>
          <img src={Wallet} aria-hidden alt="Current Wallet" />
        </header>
        <strong className={styles.value}>{formatPrice(summary.total)}</strong>
      </div>
    </div>
  );
}
