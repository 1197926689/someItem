import React from 'react';
import App from './test1/drag';
import Dropdown from './test1/dropdown';
import Lazyload from './test1/lazyload';
import Pagination from './test1/pagination';


export default function() {
  //router.push('test1/test1');
  const page=30;
  return (
    <div>
      <App />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Dropdown />
      <br />
      <p>YZH</p>
      <br />
      <Pagination pages={page} />
      <br />
      <Lazyload />
    </div>
  );
}
