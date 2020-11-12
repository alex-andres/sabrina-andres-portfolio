import React, { useState } from 'react';
import { css } from '@emotion/core';
import NavLink from '../components/NavLink';
import NavButton from '../components/NavButton';
import { colors } from '../components/theme';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Header = () => {
  const { scrollY } = useViewportScroll();
  const yRange = [0, 80];
  const heightRange = [125, 80];
  const height = useTransform(scrollY, yRange, heightRange);
  const [menuState, _setMenuState] = React.useState(false);

  const menuStateRef = React.useRef(menuState);
  const setMenuState = data => {
    menuStateRef.current = data;
    _setMenuState(data);
  };

  return (
    <motion.header
      style={{ height }}
      css={css`
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        @media (max-width: 800px) {
          padding: 1rem;
        }
        padding: 1rem 3rem ;
        box-shadow: none;
        position: sticky;
        top: 0;
        transition: box-shadow 0.5s;
        @media (max-width: 799px) {
          position: static;
          transition: box-shadow 0.5s;
          box-shadow: none;
        }
        [aria-expanded='true'] ~ nav {
          z-index: 1000;
          min-height: 100vh;
          min-width: 100vw;
          position: absolute;
          top: 0;
          left: 0;
          background: ${colors.white};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 4rem;
          transition: position ease-in 4s;
        }
      `}
    >
      {/* site name */}
      <NavLink
        css={css`

          width: 100px;
          @media (min-width: 400px){
            width: 150px;
          }
          margin: 0;
          & + [aria-expanded='true'] {
            display: none;
          }
        `}
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368.88 163.08"><path d="M227.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2C95,162.58,74,144.06,74,118.91c0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C147,78.31,139.28,80.06,129.48,82.16Z" style={{stroke:'#000',strokeMiterLimit:'10'}}/><path d="M296.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2-28.3,0-49.27-18.52-49.27-43.67,0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C216,78.31,208.28,80.06,198.48,82.16Z" style={{stroke:'#fff',strokeMiterLimit:10}}/><path d="M368.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2-28.3,0-49.27-18.52-49.27-43.67,0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C288,78.31,280.28,80.06,270.48,82.16Z" style={{fill:'#fff',stroke:'#000',strokeMiterLimit:10}}/><path d="M1.24,156.39c.7-9.73.7-18.41.7-27.09,0-10.08-.35-19.8-1.39-30.91h4.6c10.14,40.55,28,58,58.73,58,20.28,0,34.26-10.49,34.26-26.22C98.14,112,88,105.73,49.9,92.79,15.64,81.26,1,66.57,1,44.55,1,20.08,19.83.5,43.26.5c11.88,0,25.17,4.89,39.5,14.33a11.83,11.83,0,0,0,3.5,1.4C89.4,16.23,92.55,11.34,94,4l4.19-.35c0,17.13,0,33.91,1.4,51.74H93.48C86.17,24.74,67.71,6.28,44.37,6.28,27.66,6.28,13,17.77,13,31c0,11.84,8.71,20.2,43.18,31.34,41.45,13.24,56.08,26.82,56.08,51.2C112.29,141.06,91,162,62.83,162c-12.19,0-25.42-4.53-36.57-12.19-5.92-3.83-9-5.57-10.79-5.57-4.53,0-8,5.22-8.36,12.19Z" style={{fill:'#fff',stroke:'#000',strokeMiterLimit:10}}/></svg>  
      </NavLink>

      {/* nagvigation */}
      <button
        css={css`
          display: flex;
          justify-content: center;
          width: 60px;
          border: none;
          background: none;
          transition: 0.2s;
          svg {
            .rec-1 {
              transform-origin: 17px;
              transform: rotate(0deg);
              transition: 0.2s;
            }
            .rec-2 {
              transform-origin: 51px;
              transform: rotate(0deg);
              transition: 0.2s;
            }
          }
          &:focus {
            outline: none;
          }
          @media (min-width: 800px) {
            display: none;
          }
          &[aria-expanded='true'] {
            display: inline-block;
            position: absolute;
            top: 60px;
            right: 60px;
            z-index: 10000;
            transition: 0.2s;
            svg {
              .rec-1 {
                transform-origin: 17px;
                transform: rotate(45deg);
                transition: 0.2s;
              }
              .rec-2 {
                transform-origin: 51px;
                transform: rotate(-45deg);
                transition: 0.2s;
              }
            }
          }
        `}
        aria-expanded={`${menuStateRef.current}`}
        onClick={() => {
          setMenuState(!menuStateRef.current);
        }}
      >
        <svg viewBox="0 0 100 50" width="33" height="33">
          <rect className="rec-1" width="100" height="2"></rect>
          <rect className="rec-2" y="30" width="100" height="2"></rect>
        </svg>
      </button>
      <nav
        css={css`
          grid-area: menu;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          @media (max-width: 799px) {
            display: none;
          }
        `}
      >
        <NavLink activeClassName="current-page" to="/about">
          About
        </NavLink>
        <NavLink activeClassName="current-page" to="/services">
          Services
        </NavLink>
        <NavLink activeClassName="current-page" to="/projects">
          Projects
        </NavLink>
        <NavLink activeClassName="current-page" to="/blog">
          Blog
        </NavLink>
        <NavButton css={css`
          margin-right: 0;
        `} activeClassName="current-page" to="/contact">
          Contact
        </NavButton>
      </nav>
    </motion.header>
  );
};

export default Header;
