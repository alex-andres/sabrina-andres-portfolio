import React from 'react';
import styled from '@emotion/styled';
import NavLink from '../components/NavLink';
import { colors } from '../components/theme';

const NavButton = styled(NavLink)`
  background-color: black;
  color: white;
  padding: .75rem 1rem;
  transition: 0.5s;
  &:hover {
    background-color: ${colors.lightGray};
    color: black;
    transition: 0.5s;
  }
`;
export default NavButton;
