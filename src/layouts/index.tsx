import app from '@/pages/test1/drag';
import React from 'react';
import styles from './index.css';
import App from '../pages/test1/drag'

const BasicLayout: React.FC = props => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
