import { useEffect } from 'react';
import noops from 'lodash.noop';

import { api } from '@config/client';

import styles from './styles.module.scss';

export function TransactionsTable() {
  useEffect(() => {
    api
      .get(`/transactions`)
      .then(response => response.data)
      .catch(noops);
  }, []);

  return (
    <div className={styles.container}>
      <table className={styles.tableWrap}>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Categories</th>
          <th>Date</th>
        </thead>

        <tbody>
          <tr>
            <td>Rent</td>
            <td className="withdraw">-$2.000</td>
            <td>Home</td>
            <td>25/05/2022</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Hamburger</td>
            <td className="deposit">$12.000</td>
            <td>Food</td>
            <td>20/05/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
