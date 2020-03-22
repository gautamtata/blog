// @flow
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

import Menu from '../Menu';
import MovableSidebarContent from '../MovableSidebarContent';
import Author from './Author';
import styles from './Sidebar.module.scss';

import useDarkMode from "use-dark-mode"
import Sunrise from "../icons/sunrise"
import Sunset from "../icons/sunset"

type Props = {
  +hideSubscribeForm?: boolean,
  +hideAd?: boolean,
};

type PureProps = Props & {
  +data: Object,
};




export const PureSidebar = ({ data, hideSubscribeForm, hideAd}, size) => {
  const { author } = data.site.siteMetadata;
  

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} />
        <Menu />
        <MovableSidebarContent desktop hideSubscribeForm={hideSubscribeForm} hideAd={hideAd} />
      </div>
    </div>
  );
};

export const Sidebar = (props: Props) => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            author {
              name
              photo
              bio
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
