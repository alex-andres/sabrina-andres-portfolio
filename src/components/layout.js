import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from '../components/header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import Footer from '../components/footer';
import SimpleReactLightbox from "simple-react-lightbox";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`

      @import url("https://use.typekit.net/qmg7rbf.css");  
      * {
        box-sizing: border-box;
        margin: 0;
      }

     
      html{
        scroll-behavior: smooth;
      }
      html, 
      body {
        margin: 0;
        color: #55;
        font-family: Raleway;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.4;
        display:flex;
        flex-direction: column;
        height: 100%
        /* remove margin-top for main div that gatsby mounts into */
        > div {
          margin-top: 0;
        }
      }

      h1, 
      h2, 
      h3,
      h4, 
      h5, 
      h6 {
        font-family: ltc-bodoni-175;
        color: #222; 
        line-height 1.1;
        font-weight: 500;
      }


      + *{
        margin-top: .5rem;
      }

      strong {
        color: #222;
      }

      li {
        margin-top: .25rem;
      }
      main{
         * + * {
        margin-bottom: 1rem;
      }
      }

    `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
        <link rel="stylesheet" href="https://use.typekit.net/qmg7rbf.css"/>
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          flex: 1 0 auto;
          min-height: calc(100vh - 90px - 187px);
        `}
      >
      <SimpleReactLightbox>
        {children}
      </SimpleReactLightbox>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
