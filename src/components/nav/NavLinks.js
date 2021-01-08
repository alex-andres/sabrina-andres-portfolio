import React from "react";
import { useMenuContext } from "../../state/Menu";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const NavLinks = () => {
  const returnIndexSeconds = (index) => {
    return `.${index}s`;
  };
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
        <AnimatedLi key={pageLink}>
          <NavLink
            to={`/${pageLink === "home" ? "" : pageLink}`}
            onClick={closeMenu}
            className={`${pageLink}-link`}
            css={css`
              animation-delay: ${returnIndexSeconds(index)};
            `}
          >
            {pageLink.replace(/^\w/, (c) => c.toUpperCase())}
          </NavLink>
        </AnimatedLi>
      ))}
    </NavLinksWrapper>
  );
};

export default NavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-inline-start: 0;
  max-width: 66rem;
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;
const AnimatedLi = styled.li`
  animation-name: slidedown;
  animation-duration: 0.75s;
  animation-delay: 8s;
  animation-fill-mode: forwards;
  opacity: 0;
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
  @keyframes slidedown {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
const NavLink = styled(Link)`
  color: var(--black);
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 2rem;
  text-decoration: none;
  font-weight: 300;
  padding: 0.5em;
  margin: 0 0.5rem;
  @media screen and (min-width: 845px) {
    margin: 0 1.8rem;
  }
  transition: color 0.5s;
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
      background-color: var(--lightGray);
      color: var(--black);
      transition: 0.5s;
    }
  }
  .home-link {
    @media screen and (min-wdith: 768px) {
      display: none;
    }
  }
`;
