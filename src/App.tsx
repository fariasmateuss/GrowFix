import { useState } from 'react';

import { Dashboard } from '@components/Dashboard';
import { Header } from '@components/Header';
import { NewTransactionModal } from '@components/NewTransactionModal';

import { TransactionProvider } from '@contexts/Transactions/TransactionsProvider';
import './styles/global.scss';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
    </TransactionProvider>
  );
}
