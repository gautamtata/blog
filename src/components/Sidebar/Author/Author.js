import { Link, withPrefix } from 'gatsby';
import React from 'react';

import styles from './Author.module.scss';

const Author = ({ author }) => (
  <div className={styles['author']}>
    <div className={styles['author__main-section']}>
      <Link to="/">
        <img src={withPrefix(author.photo)} className={styles['author__photo']} alt={author.name} />
      </Link>
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          Gautam Tata
        </Link>{' '}
        <a
          style={{ fontWeight: 500 }}
          href="https://github.com/gautamtata"
          target="_blank"
          rel="noopener noreferrer"
        >
          @gautamtata
        </a>
      </h2>
    </div>
    <p className={styles['author__subtitle']} dangerouslySetInnerHTML={{ __html: author.bio }} />
  </div>
);

export default Author;
