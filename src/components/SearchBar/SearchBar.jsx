import styles from "./SearchBar.module.css";
import React from 'react';

export default function SearchBar(onSearch) {
   return (
      <div className={styles.container}>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
