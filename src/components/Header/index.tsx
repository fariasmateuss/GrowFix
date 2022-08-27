import logo from '@assets/logo.svg';

import { HeaderProps } from './types';

import styles from './styles.module.scss';

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img className={styles.logo} src={logo} alt="Logo GrowFix" />

        <button
          type="button"
          className={styles.button}
          onClick={onOpenNewTransactionModal}
        >
          New transaction
        </button>
      </div>
    </header>
  );
}
