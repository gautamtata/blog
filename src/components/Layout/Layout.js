import { graphql, StaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby'
import { mediaMax } from '@divyanshu013/media';
import { FiTerminal, FiSun, FiMoon } from 'react-icons/fi';
import styles from './Layout.module.scss';

import ThemeContext from '../ThemeContext'
import Button from '../Button'

import { BACKGROUND_TRANSITION_TIME, EASE_IN_OUT_TRANSITION, getTheme } from '../../utils/theme';
import { rhythm } from '../../utils/typography'


export const PureLayout = ({ children, title, description, data, location }) => {
  const { author, url: siteUrl } = data.site.siteMetadata;
  let header;
  const twitter = `@${author.contacts.twitter}`;
  const rootPath = `${__PATH_PREFIX__}/`;
  const theme = useContext(ThemeContext)
  const toggleTheme = useContext(ThemeContext)
  const { color, background, secondary } = getTheme(theme);

  const darkTheme = getTheme('dark');

  return (
    <div>
      <Helmet>
        
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={siteUrl + author.photoLarge} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:creator" content={twitter} />
      </Helmet>
    {children}
    </div>
  );
};

export const Layout = props => (
  
    <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            url
            author {
              photoLarge
              contacts {
                twitter
              }
            }
          }
        }
      }
    `}
    render={data => <PureLayout {...props} data={data} />}
  />
);
  
export default Layout;
