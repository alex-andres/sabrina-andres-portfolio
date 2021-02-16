import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useMenuContext } from "../../state/Menu";
import { VisitedContext } from "../../contexts/VisitedContext";

const LogoLink = () => {
  const [visited] = useContext(VisitedContext);
  const { closeMenu } = useMenuContext();
  return (
    <StyledLogo
      title="Home"
      to="/"
      onClick={closeMenu}
      className={visited ? "visited" : ""}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 368.88 163.08"
        alt="Home Link"
      >
        <path
          d="M227.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2C95,162.58,74,144.06,74,118.91c0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C147,78.31,139.28,80.06,129.48,82.16Z"
          style={{ stroke: "#000", strokeMiterLimit: 10 }}
        />
        <path
          d="M296.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2-28.3,0-49.27-18.52-49.27-43.67,0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C216,78.31,208.28,80.06,198.48,82.16Z"
          style={{ stroke: "#fff", strokeMiterLimit: 10 }}
        />
        <path
          d="M368.38,161.18a50.17,50.17,0,0,1-11.18,1c-18.17,0-28.65-6.29-44-25.85-21.66,21.66-30.74,26.2-48.91,26.2-28.3,0-49.27-18.52-49.27-43.67,0-21.32,12.93-34.25,40.18-39.84l33.89-6.63c10.84-2.1,12.93-2.8,21.32-5.94V34.24c0-16.91-12.68-26.78-35.23-26.78-17.26,0-29.59,6.34-29.59,15.15,0,7.75,7.4,13.39,7.4,21.49,0,7.75-8.46,14.8-16.56,14.8-8.81,0-15.5-7.75-15.5-18.68,0-22.54,25-39.45,58.83-39.45,35.58,0,61.65,21.49,61.65,51.08v76.67c0,20.42,5.88,26.65,27,27.34Zm-97.9-79c-18.91,3.85-25.56,14-25.56,38.5,0,21,10.15,34.31,25.91,34.31,19.95,0,39.55-21,39.55-41.66V72.36C288,78.31,280.28,80.06,270.48,82.16Z"
          style={{ fill: "#fff", stroke: "#000", strokeMiterLimit: 10 }}
        />
        <path
          d="M1.24,156.39c.7-9.73.7-18.41.7-27.09,0-10.08-.35-19.8-1.39-30.91h4.6c10.14,40.55,28,58,58.73,58,20.28,0,34.26-10.49,34.26-26.22C98.14,112,88,105.73,49.9,92.79,15.64,81.26,1,66.57,1,44.55,1,20.08,19.83.5,43.26.5c11.88,0,25.17,4.89,39.5,14.33a11.83,11.83,0,0,0,3.5,1.4C89.4,16.23,92.55,11.34,94,4l4.19-.35c0,17.13,0,33.91,1.4,51.74H93.48C86.17,24.74,67.71,6.28,44.37,6.28,27.66,6.28,13,17.77,13,31c0,11.84,8.71,20.2,43.18,31.34,41.45,13.24,56.08,26.82,56.08,51.2C112.29,141.06,91,162,62.83,162c-12.19,0-25.42-4.53-36.57-12.19-5.92-3.83-9-5.57-10.79-5.57-4.53,0-8,5.22-8.36,12.19Z"
          style={{ fill: "#fff", stroke: "#000", strokeMiterLimit: 10 }}
        />
      </svg>
    </StyledLogo>
  );
};

export default LogoLink;

const StyledLogo = styled(Link)`
  min-width: 125px;
  @media screen and (max-width: 768px) {
    svg {
      width: 10rem;
    }
  }
  margin: 0;
  & + [aria-expanded="true"] {
    display: none;
  }
  opacity: 0;
  animation-name: slidedown;
  animation-duration: 0.75s;
  animation-delay: 7.85s;
  animation-fill-mode: forwards;
  &.visited {
    animation-delay: 0s;
  }

  @keyframes slidedown {
    from {
      opacity: 0;
      transform: translateY(-15rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
