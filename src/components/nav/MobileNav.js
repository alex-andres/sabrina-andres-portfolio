import React from "react";
import styled from "@emotion/styled";
import { useMenuContext } from "../../state/Menu";
import { useScrollFreeze } from "../../hooks/useScrollFreeze";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
