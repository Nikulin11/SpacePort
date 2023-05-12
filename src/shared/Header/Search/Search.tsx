import React from 'react';
import styles from './search.css';

export function Search() {
  return (
    <div className={styles.inputBlock}>
      <input className={styles.input} type="text" placeholder='Поиск по товарам' />
      <svg className={styles.searchIcon} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.87696 9.8905L16.08 16.103M11.4 6.20794C11.4 9.0842 9.07188 11.4159 6.2 11.4159C3.32812 11.4159 1 9.0842 1 6.20794C1 3.33167 3.32812 1 6.2 1C9.07188 1 11.4 3.33167 11.4 6.20794Z" stroke="#D0D0D0"/>
      </svg>
    </div>
  );
}
