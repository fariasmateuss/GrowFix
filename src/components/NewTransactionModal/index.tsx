import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import close from '@assets/close.svg';
import imcome from '@assets/income.svg';
import outcome from '@assets/outcome.svg';

import { useTransactionDispatch } from '@contexts/Transactions/TransactionsContext';
import { NewTransationModalProps } from './types';
import styles from './styles.module.scss';

Modal.setAppElement(`#root`);

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) {
  const [title, setTitle] = useState(``);
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState(``);
  const [type, setType] = useState(`deposit`);
  const { createTransaction } = useTransactionDispatch();

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle(``);
    setAmount(0);
    setCategory(``);
    setType(`deposit`);
    onRequestClose();
  };

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
        <img src={close} alt="Close" />
      </button>

      <form onSubmit={handleCreateNewTransaction}>
        <h2 className={styles.heading}>Register transation</h2>
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Value"
          onChange={e => setAmount(Number(e.target.value))}
        />
        <div className={styles.transationTypeContainer}>
          <button
            className={styles.transationsTypeButton}
            type="button"
            onClick={() => setType(`deposit`)}
          >
            <img src={imcome} alt="Income" />
            <span>Income</span>
          </button>
          <button
            className={styles.transationsTypeButton}
            type="button"
            onClick={() => setType(`withdraw`)}
          >
            <img src={outcome} alt="Outcome" />
            <span>Outcome</span>
          </button>
        </div>
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Categories"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button className={styles.register} type="submit">
          Register
        </button>
      </form>
    </Modal>
  );
}
