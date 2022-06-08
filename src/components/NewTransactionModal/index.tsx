import Modal from 'react-modal';

import close from '@assets/close.svg';

import { NewTransationModalProps } from './types';

import styles from './styles.module.scss';

Modal.setAppElement(`#root`);

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className={styles.modalClose}
      >
        {close}
      </button>

      <div>
        <h2 className={styles.heading}>Register transation</h2>
        <input className={styles.modalInput} type="text" placeholder="Title" />
        <input className={styles.modalInput} type="text" placeholder="Value" />
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Categories"
        />

        <button className={styles.register} type="submit">
          Register
        </button>
      </div>
    </Modal>
  );
}
