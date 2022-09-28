import { useState } from 'react';
import { Controller, SubmitHandler } from 'react-hook-form';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Modal from 'react-modal';

import Close from '@assets/close.svg';
import Income from '@assets/income.svg';
import Outcome from '@assets/outcome.svg';
import { useTransactionDispatch } from '@contexts/Transactions/TransactionsContext';
import { useForm } from '@hooks/useForm';
import { Form } from '@components/Form';

import { newTransactionFormSchema } from './schemas';
import {
  NewTransationModalProps,
  NewTransactionFormValues,
  TransactionType,
} from './types';
import styles from './styles.module.scss';

Modal.setAppElement(`#root`);

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransationModalProps) {
  const [transactionType, setTransactionType] =
    useState<TransactionType>(`deposit`);
  const { createTransaction } = useTransactionDispatch();
  const form = useForm({
    schema: newTransactionFormSchema,
  });

  const handleCreateNewTransaction: SubmitHandler<
    NewTransactionFormValues
  > = async data => {
    const { title, amount, category, type } = data;

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
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
        <img src={Close} alt="Close" />
      </button>

      <Form form={form} onSubmit={values => handleCreateNewTransaction(values)}>
        <h2 className={styles.heading}>Register transation</h2>
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Title"
          required
          {...form.register(`title`)}
        />
        <input
          className={styles.modalInput}
          type="number"
          placeholder="Value"
          required
          {...form.register(`amount`, { valueAsNumber: true })}
        />
        <Controller
          control={form.control}
          name="type"
          render={({ field }) => (
            <RadioGroup.Root
              className={styles.transationTypeContainer}
              onValueChange={field.onChange}
              value={field.value}
            >
              <RadioGroup.Item
                className={
                  transactionType === `deposit`
                    ? styles[transactionType]
                    : styles.transactionTypeButton
                }
                value="deposit"
                type="button"
                onClick={() => setTransactionType(`deposit`)}
              >
                <img src={Income} alt="Incoming" />
                <span>Income</span>
              </RadioGroup.Item>
              <RadioGroup.Item
                className={
                  transactionType === `withdraw`
                    ? styles[transactionType]
                    : styles.transactionTypeButton
                }
                value="withdraw"
                type="button"
                onClick={() => setTransactionType(`withdraw`)}
              >
                <img src={Outcome} alt="Outcome" />
                <span>Outcome</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          )}
        />
        <input
          className={styles.modalInput}
          type="text"
          placeholder="Categories"
          required
          {...form.register(`category`)}
        />

        <button
          className={styles.register}
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Register
        </button>
      </Form>
    </Modal>
  );
}
