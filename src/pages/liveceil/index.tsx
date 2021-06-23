import React from 'react';
import styles from './index.module.scss';

const CELL_SIZE = 20;

const WIDTH = 800;

const HEIGHT = 600;

const liveceil = () => {
  return (
    <div>
      <div className={styles.board} style={{ width: WIDTH, height: HEIGHT }} />
    </div>
  );
};

export default liveceil;
