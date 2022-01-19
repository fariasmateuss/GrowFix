import logo from '@assets/logo.svg';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="Logo DtMoney" />

        <button type="button" className={styles.button}>
          New transaction
        </button>
      </div>
    </header>
  );
}
