import { SearchBar } from '@components/SearchBar';
import { Summary } from '@components/Summary';
import { TransactionsTable } from '@components/TransactionsTable';

import styles from './styles.module.scss';

export function Dashboard() {
  return (
    <main className={styles.container}>
      <Summary />
      <SearchBar />
      <TransactionsTable />
    </main>
  );
}
