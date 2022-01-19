import income from '@assets/income.svg';
import outcome from '@assets/outcome.svg';
import total from '@assets/total.svg';

import styles from './styles.module.scss';

export function Summary() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p>Income</p>
          <img src={income} aria-hidden alt="Arrow up" />
        </header>
        <strong className={styles.value}>$1000,00</strong>
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <p>Outcome</p>
          <img src={outcome} aria-hidden alt="Out come" />
        </header>
        <strong className={styles.value}>- $1000,00</strong>
      </div>

      <div className={styles.hightlight}>
        <header className={styles.header}>
          <p>Total</p>
          <img src={total} aria-hidden alt="Total" />
        </header>
        <strong className={styles.value}>$500,00</strong>
      </div>
    </div>
  );
}
