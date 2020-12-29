import React from "react";
import styled from "@emotion/styled";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
