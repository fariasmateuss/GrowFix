import { Summary } from '@components/Summary';

import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <div className={styles.container}>
      <Summary />
    </div>
  );
}
