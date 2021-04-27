import React, { useState } from 'react';
import styles from './pagnation.scss';

export interface PaginationItem {
  pages: number;
}

const Pagination: React.FC<PaginationItem> = props => {
  const [active, setActive] = useState(1);

  let totalpages = []; //总页数

  function prev(e:any) {
    if (active == 1) {
      e.target.style.cursor = 'not-allowed';
    }
  }

  function next(e:any) {
    if (active == props.pages) {
      e.target.style.cursor = 'not-allowed';
    }
  }

  totalpages.push(
    <li
      onMouseOver={prev}
      onClick={() => {
        if (active > 1) {
          setActive(active - 1);
        }
      }}
      className={active === 1 ? styles.max : ''}
      key={0}
    >
      上一页
    </li>,
  );

  if (props.pages <= 10) {
    for (let i = 1; i <= props.pages; i++) {
      totalpages.push(
        <li onClick={() => setActive(i)} className={active === i ? styles.active : ''} key={i}>
          {i}
        </li>,
      );
    }
  } else {
    if (active <= 7) {
      //当页码在前面七叶时
      totalpages.push(
        <li onClick={() => setActive(1)} className={active === 1 ? styles.active : ''} key={1}>
          1
        </li>,
      );

      for (let i = 2; i <= 7; i++) {
        totalpages.push(
          <li onClick={() => setActive(i)} className={active === i ? styles.active : ''} key={i}>
            {i}
          </li>,
        );
      }
      totalpages.push(
        <li onClick={() => setActive(props.pages - 7)} className={styles.ellipsis} key={-2}>
          ...
        </li>,
        <li
          onClick={() => setActive(props.pages)}
          className={active === props.pages ? styles.active : ''}
          key={props.pages}
        >
          {props.pages}
        </li>,
      );
    } else if (active >= props.pages - 6) {
      //当页码到最后七页时
      totalpages.push(
        <li onClick={() => setActive(1)} className={active === 1 ? styles.active : ''} key={1}>
          1
        </li>,
        <li onClick={() => setActive(7)} className={styles.ellipsis} key={-1}>
          ...
        </li>,
      );
      for (let i = props.pages - 6; i <= props.pages; i++) {
        totalpages.push(
          <li onClick={() => setActive(i)} className={active === i ? styles.active : ''} key={i}>
            {i}
          </li>,
        );
      }
    } else if (active >= 7 && active <= props.pages - 6) {
      //当页码在中间时
      //1。。。

      totalpages.push(
        <li onClick={() => setActive(1)} className={active === 1 ? styles.active : ''} key={1}>
          1
        </li>,
        <li onClick={() => setActive(7)} className={styles.ellipsis} key={-1}>
          ...
        </li>,
      );
      //中间六页
      for (let i = active - 2; i <= active + 2; i++) {
        totalpages.push(
          <li onClick={() => setActive(i)} className={active === i ? styles.active : ''} key={i}>
            {i}
          </li>,
        );
      }
      //。。。 20
      totalpages.push(
        <li onClick={() => setActive(props.pages - 7)} className={styles.ellipsis} key={-2}>
          ...
        </li>,
        <li
          onClick={() => setActive(props.pages)}
          className={active === props.pages ? styles.active : ''}
          key={props.pages}
        >
          {props.pages}
        </li>,
      );
    }
  }

  totalpages.push(
    <li
      onMouseOver={next}
      onClick={() => {
        if (active < props.pages) {
          setActive(active + 1);
        }
      }}
      className={active === props.pages ? styles.max : ''}
      key={props.pages + 1}
    >
      下一页
    </li>,
  );

  return (
    <div className={styles.main}>
      <ul className={styles.page}>{totalpages}</ul>
    </div>
  );
};

export default Pagination;
