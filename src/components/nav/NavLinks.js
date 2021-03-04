import React, { useContext } from "react";
import { useMenuContext } from "../../state/Menu";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import { VisitedContext } from "../../contexts/VisitedContext";

const NavLinks = () => {
  const [visited] = useContext(VisitedContext);
  const { closeMenu } = useMenuContext();
  const pageLinks = [
    "home",
    "about",
    "services",
    "projects",
    "blog",
    "contact",
  ];
  return (
    <NavLinksWrapper className="nav-links">
      {pageLinks.map((pageLink, index) => (
        <AnimatedLi key={pageLink} className={visited ? "visited" : ""}>
          <NavLink
            to={`/${pageLink === "home" ? "" : pageLink}`}
            onClick={closeMenu}
            className={`${pageLink}-link`}
          >
            {pageLink.replace(/^\w/, (c) => c.toUpperCase())}
          </NavLink>
        </AnimatedLi>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;

const createDelayChain = () => {
  let styles = "";

  for (let i = 1; i < 7; i++) {
    styles += `
       :nth-of-type(${i}) {
         animation-delay: ${i * 0.15}s;
       }
     `;
  }

  return css`
    ${styles}
  `;
};

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  padding-inline-start: 0;
  max-width: 66rem;
  li {
    padding: 1.5rem;
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    li {
      padding: 0;
    }
  }
`;
const AnimatedLi = styled.li`
  animation-name: slideUp;
  animation-duration: 0.75s;
  animation-delay: 8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  opacity: 0;
  @media screen and (min-width: 768px) {
    animation-name: slideDown;
  }
  &:nth-of-type(1) {
    animation-delay: 8.15;
  }
  &:nth-of-type(2) {
    animation-delay: 8.3s;
  }
  &:nth-of-type(3) {
    animation-delay: 8.45s;
  }
  &:nth-of-type(4) {
    animation-delay: 8.6s;
  }
  &:nth-of-type(5) {
    animation-delay: 8.75s;
  }
  &:nth-of-type(6) {
    animation-delay: 8.9s;
  }
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &.visited {
    ${'' /* animation-delay: 4s; */}
    ${createDelayChain()}
  }
`;
const NavLink = styled(Link)`
  color: var(--black);
  font-size: 3rem;
  font-weight: normal;
  line-height: 3.2rem;
  text-decoration: none;
  font-weight: 300;
  margin: 0 0.5rem;
  transition: color 0.5s;
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding: 0.5rem;
  }
  &.current-page {
    border-bottom: 2px solid var(--black);
    margin-top: 6.5px;
    margin-bottom: 0.25rem;
  }
  &:hover {
    transition: color 0.5s;
    color: var(--midGray);
  }
  &.contact-link {
    background-color: var(--black);
    color: white;
    padding: 1rem 1.5rem;
    transition: color 0.5s;
    margin-right: 0;
    &:hover {
      background-color: var(--midGray);
      transition: 0.5s;
    }
  }
  .home-link {
    @media screen and (min-wdith: 768px) {
      display: none;
    }
  }
`;