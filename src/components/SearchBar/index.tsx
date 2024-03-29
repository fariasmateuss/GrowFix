import Search from '@assets/search.svg';
import { Form } from '@components/Form';
import { useForm } from '@hooks/useForm';

import { useTransactionDispatch } from '@contexts/Transactions/TransactionsContext';
import { searchFormSchema } from './schemas';
import { SearchFormValues } from './types';
import styles from './styles.module.scss';

export function SearchBar() {
  const form = useForm({
    schema: searchFormSchema,
  });

  const { getTransaction } = useTransactionDispatch();

  const handleSearchTransactions = async (data: SearchFormValues) => {
    const { query } = data;

    await getTransaction(query);
  };

  return (
    <Form
      className={styles.searchBar}
      form={form}
      onSubmit={values => handleSearchTransactions(values)}
    >
      <input
        className={styles.searchBarInput}
        type="search"
        placeholder="Search an transaction"
        required
        {...form.register(`query`)}
      />
      <button
        className={styles.searchBarButton}
        disabled={form.formState.isSubmitting}
        type="submit"
      >
        <img src={Search} alt="Search" />
        Search
      </button>
    </Form>
  );
}
