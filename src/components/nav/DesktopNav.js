import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Spiral as Hamburger } from "hamburger-react";
import { useMenuContext } from "../../state/Menu";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks/useScroll";
import LogoLink from "./LogoLink.js";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <LogoLink />
      <NavLinks />
      <Hamburger
        toggled={isMenuOpen}
        toggle={toggleMenu}
        duration={0}
        className="hamburger-react"
        aria-label="hamburger menu"
      />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  color: var(--black);
  transition: box-shadow 0.25s linear;
  position: fixed;
  top: 0;
  left: 0;
  height: 12.5rem;
  max-width: 100vw;
  width: 100%;
  z-index: 4;
  padding: 0 3vw;
  margin: 0 auto;
  box-shadow: none;

  ${(props) =>
    props.isScrolled &&
    css`
      height: 8rem;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    `}
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
    height: 7rem;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
