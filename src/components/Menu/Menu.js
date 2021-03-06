import classNames from 'classnames/bind';
import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

export const PureMenu = ({ data, horizontal, bold, noMargin }) => {
  const { menu } = data.site.siteMetadata;
  return (
    <nav
      className={cx({
        menu: true,
        horizontal,
        'no-margin': noMargin,
      })}
    >
      <ul className={styles['menu__list']}>
        {menu.map(item => (
          <li className={styles['menu__list-item']} key={item.path}>
            <Link
              to={item.path}
              className={cx({
                'menu__list-item-link': true,
                bold,
              })}
              activeClassName={styles['menu__list-item-link--active']}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Menu = props => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
            menu {
              label
              path
            }
          }
        }
      }
    `}
    render={data => <PureMenu {...props} data={data} />}
  />
);

export default Menu;
