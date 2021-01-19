import React from 'react';
import styles from './index.css';
import App from './test1/drag';
import Dropdown from './test1/dropdown';
import Lazyload from './test1/lazyload';
import Link from 'umi/link';
import router from 'umi/router';


export default function() {
  //router.push('test1/test1');
  return (
    <div>
      <App />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Dropdown />
      <br />
      <Link to="/">aaaaa</Link>
      <br />
      <Lazyload />
    </div>
  );
}
