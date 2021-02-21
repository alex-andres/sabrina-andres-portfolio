import React from "react";
import { Global, css } from "@emotion/core";
const GlobalStyles = () => {
  return (
    <Global
      styles={css`
      :root{
        --black: #1C1C1C;
        --white: #fff;
        --lightGray: #f1f1ef;
        --midGray: #8e8e8e;
        --darkGray: #2E2E2E;
      }

      * {
        box-sizing: border-box;
        margin: 0;
      }

     
      html{
        scroll-behavior: smooth;
        font-size: 10px;
        width: 100vw;

      }
      html, 
      body {
        margin: 0;
        color: var(--black);
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        line-height: 1.7;
        display:flex;
        flex-direction: column;
        height: 100%;
        max-width: 100%;
        /* remove margin-top for main div that gatsby mounts into */
        > div {
          margin-top: 0;
        }
      }
      body{
        font-size: 1.8rem;
        overflow-x: hidden;
      }
      main{
        margin: 6rem auto 5rem;
          @media screen and (min-width: 768px) {
            margin: 14rem auto 7.2rem;
          }
          width: 100%;
          flex: 1 0 auto;
          min-height: calc(100vh - 90px - 187px);
      }

      h1, 
      h2, 
      h3,
      h4, 
      h5, 
      h6 {
        font-family: "ltc-bodoni-175", serif;;
        color: var(--black); 
        line-height: 1.1;
        font-weight: 500;
      }
      h1{
        font-size: 4rem;
        @media(min-width: 768px){
        font-size: 5rem;
        }
        @media(min-width: 1024px){
          font-size: 6rem;
        }
      }
      h2{
        font-size: 3rem;
        @media(min-width: 768px){
        font-size: 4rem;
        }
        @media(min-width: 1024px){
          font-size: 5rem;
        }
      }
      h3, h4, h5, h6{
        font-size: 2.5rem;
        @media(min-width: 768px){
        font-size: 3.5rem;
        }
        @media(min-width: 1024px){
          font-size: 4rem;
        }
      }
      }
      + *{
        margin-top: 1rem;
      }


      li {
        margin-top: .25rem;
      }
      ${'' /* main{
         */}
      }
      a{
        text-decoration: none;
        p{
          color: var(--black);
        }
      }
      img{
        max-width: 100%;
      }

    `}
    />
  );
};

export default GlobalStyles;
