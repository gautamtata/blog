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
    <div 
      css={{
        [mediaMax.small]: {
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        a: {
          color: 'inherit',
          textDecoration: 'none',
          transition: `border-color ${EASE_IN_OUT_TRANSITION}`,
          borderBottom: `1px dashed transparent`,
          '&:hover, &:focus': {
            borderBottomColor: color,
          },
        },
        blockquote: {
          color: secondary,
          borderColor: secondary,
        },
      }}>
        <Button
          aria-label="Light and dark mode switch"
          circular
          onClick={toggleTheme}
          className="container"
          css={{
            background,
            transitionDuration: '0s',
            // delay background-color transition for nicer animation
            transitionDelay: theme === 'dark' ? '0s' : BACKGROUND_TRANSITION_TIME,
            transitionProperty: 'background-color, color',
          }}
        >
          {theme === 'light' ? <FiSun /> : <FiMoon />}
          <div
            className={theme}
            css={{
              position: 'absolute',
              background: darkTheme.background,
              borderRadius: '50%',
              width: 32,
              height: 32,
              zIndex: -1,
              transition: `transform ${BACKGROUND_TRANSITION_TIME} ease`,
              '&.dark': {
                transform: 'scale(150)',
              },
            }}
          />
        </Button>
        {children}
      </div>
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
