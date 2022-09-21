import Search from '@assets/search.svg';
import styles from './styles.module.scss';

export function SearchBar() {
  return (
    <form className={styles.searchBar}>
      <input
        className={styles.searchBarInput}
        type="search"
        placeholder="Search an transaction"
      />
      <button className={styles.searchBarButton} type="submit">
        <img src={Search} alt="Search" />
        Search
      </button>
    </form>
  );
}
