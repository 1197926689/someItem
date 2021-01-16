import app from '@/pages/test1/test1';
import React from 'react';
import styles from './index.css';
import App from '../pages/test1/test1'

const BasicLayout: React.FC = props => {
  return (
    <div>
      <App />
      {props.children}
    </div>
  );
};

export default BasicLayout;
