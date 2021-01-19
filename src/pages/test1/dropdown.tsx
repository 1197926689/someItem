import React from 'react';
import styles from './dropdown.css';

const dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>下拉菜单</button>
      <div className={styles.dropdownContent}>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
      </div>
    </div>
  );
};

export default dropdown;
