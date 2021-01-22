import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Button from "./SubmitButton";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const Footer = () => {
  const controls = useAnimation();
  const [ref7, inView7] = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView7) {
      controls.start("visible");
    }
  }, [controls, inView7]);
  const igVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.75,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <StyledFooter
      ref={ref7}
      animate={controls}
      initial="hidden"
      variants={igVariants}
    >
      <Link className="branding-link" to="/">
        <h1>Sabrina Andres Art Advisory</h1>
      </Link>
      <div className="contact-info-1">
        <address>Los Angeles, CA</address>
        <a
          href="tel:6263659609"
          aria-label=" Call Sabrina Andres at 6 2 6. 3 6 5. 9 6 0 9."
          title="Call Sabrina Andres"
          className="phone"
        >
          (626) 365-9609
        </a>
      </div>
      <div className="contact-info-2">
        <a
          href="mailto:sabrina@sabrinaandres.com"
          title="Send Sabrina an email"
          className="email"
        >
          sabrina@sabrinaandres.com
        </a>
        <a
          href="https://www.instagram.com/sab_rina_n/"
          className="instagram-link-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 503.84 503.84"
            title="Instagram Logo"
            alt="Instagram Logo"
          >
            <path
              className="section"
              d="M251.92 45.39c67.27 0 75.23.26 101.8 1.47 24.56 1.12 37.9 5.22 46.78 8.67a78 78 0 0129 18.85 78 78 0 0118.85 29c3.45 8.88 7.55 22.22 8.67 46.78 1.21 26.57 1.47 34.53 1.47 101.8s-.26 75.23-1.47 101.8c-1.12 24.56-5.22 37.9-8.67 46.78a83.51 83.51 0 01-47.81 47.81c-8.88 3.45-22.22 7.55-46.78 8.67-26.56 1.21-34.53 1.47-101.8 1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78 78 0 01-29-18.85 78 78 0 01-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23 1.47-101.8c1.12-24.56 5.22-37.9 8.67-46.78a78 78 0 0118.85-29 78 78 0 0129-18.85c8.88-3.45 22.22-7.55 46.78-8.67 26.57-1.21 34.53-1.47 101.8-1.47m0-45.39c-68.42 0-77 .29-103.87 1.52S102.92 7 86.92 13.22a123.68 123.68 0 00-44.64 29.06 123.68 123.68 0 00-29.06 44.64c-6.22 16-10.48 34.34-11.7 61.15S0 183.5 0 251.92s.29 77 1.52 103.87 5.48 45.13 11.7 61.13a123.68 123.68 0 0029.06 44.62 123.52 123.52 0 0044.64 29.07c16 6.23 34.34 10.49 61.15 11.71s35.45 1.52 103.87 1.52 77-.29 103.87-1.52 45.11-5.48 61.11-11.71a128.74 128.74 0 0073.69-73.69c6.23-16 10.49-34.34 11.71-61.15s1.52-35.45 1.52-103.87-.29-77-1.52-103.87-5.48-45.11-11.71-61.11a123.52 123.52 0 00-29.05-44.62 123.68 123.68 0 00-44.64-29.08c-16-6.22-34.34-10.48-61.15-11.7S320.34 0 251.92 0z"
            />
            <path
              className="section"
              d="M251.92 122.56a129.36 129.36 0 10129.36 129.36 129.35 129.35 0 00-129.36-129.36zm0 213.36a84 84 0 1184-84 84 84 0 01-84 84z"
            />
            <circle className="section" cx="386.4" cy="117.44" r="30.23" />
          </svg>
        </a>
      </div>
      <form
        className="sign-up-form"
        // action={(e) => {
        //   e.preventDefault();
        //   addToMailChimp(email);
        // }}
      >
        <label htmlFor="emailSignUp" className="sign-up-heading">
          <strong>Sign up for Email Updates</strong>
        </label>
        <div className="sign-up-input">
          <input name="emailSignUp" type="email" />
          <Button>Sign Up</Button>
        </div>
      </form>
      <div className="page-links">
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      <a
        href="https://www.instagram.com/sab_rina_n/"
        className="instagram-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 503.84 503.84"
          title="Instagram Logo"
          alt="Instagram Logo"
        >
          <path
            className="section"
            d="M251.92 45.39c67.27 0 75.23.26 101.8 1.47 24.56 1.12 37.9 5.22 46.78 8.67a78 78 0 0129 18.85 78 78 0 0118.85 29c3.45 8.88 7.55 22.22 8.67 46.78 1.21 26.57 1.47 34.53 1.47 101.8s-.26 75.23-1.47 101.8c-1.12 24.56-5.22 37.9-8.67 46.78a83.51 83.51 0 01-47.81 47.81c-8.88 3.45-22.22 7.55-46.78 8.67-26.56 1.21-34.53 1.47-101.8 1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78 78 0 01-29-18.85 78 78 0 01-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23 1.47-101.8c1.12-24.56 5.22-37.9 8.67-46.78a78 78 0 0118.85-29 78 78 0 0129-18.85c8.88-3.45 22.22-7.55 46.78-8.67 26.57-1.21 34.53-1.47 101.8-1.47m0-45.39c-68.42 0-77 .29-103.87 1.52S102.92 7 86.92 13.22a123.68 123.68 0 00-44.64 29.06 123.68 123.68 0 00-29.06 44.64c-6.22 16-10.48 34.34-11.7 61.15S0 183.5 0 251.92s.29 77 1.52 103.87 5.48 45.13 11.7 61.13a123.68 123.68 0 0029.06 44.62 123.52 123.52 0 0044.64 29.07c16 6.23 34.34 10.49 61.15 11.71s35.45 1.52 103.87 1.52 77-.29 103.87-1.52 45.11-5.48 61.11-11.71a128.74 128.74 0 0073.69-73.69c6.23-16 10.49-34.34 11.71-61.15s1.52-35.45 1.52-103.87-.29-77-1.52-103.87-5.48-45.11-11.71-61.11a123.52 123.52 0 00-29.05-44.62 123.68 123.68 0 00-44.64-29.08c-16-6.22-34.34-10.48-61.15-11.7S320.34 0 251.92 0z"
          />
          <path
            className="section"
            d="M251.92 122.56a129.36 129.36 0 10129.36 129.36 129.35 129.35 0 00-129.36-129.36zm0 213.36a84 84 0 1184-84 84 84 0 01-84 84z"
          />
          <circle className="section" cx="386.4" cy="117.44" r="30.23" />
        </svg>
      </a>

      <small className="copyright">© 2020 Sabrina Andres Art Advisory </small>
      <small className="credits">
        Crafted with Love by
        <a
          href="https://aandres.dev"
          title="View Alex Andres' Web Development Portfolio"
        >
          aandres.dev
        </a>
      </small>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled(motion.footer)`
  background-color: var(--lightGray);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0;
  h1,
  address,
  a,
  input,
  button,
  small {
    margin-bottom: 1.6rem;
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 0;
  }
  a {
    color: var(--black);
    display: inline-block;
    transition: color 0.5s;
    &:hover {
      transition: color 0.5s;
      color: var(--midGray);
    }
  }
  .instagram-link {
    svg {
      height: 29px;
      width: 29px;
      transition: fill 0.5s;
      .section {
        fill: var(--black);
      }
      &:hover {
        .section {
          fill: var(--midGray);
          transition: fill 0.5s;
        }
      }
    }
  }
  .instagram-link-medium {
    display: none;
  }
  input,
  button {
    height: 3.5rem;
    width: 23.5rem;
    display: block;
  }
  button {
    padding: 0;
    align-text: center;
  }
  strong {
    font-weight: 500;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    padding: 4rem 5vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 4.5rem);
    column-gap: 7.2rem;
    grid-template-areas: "heading signUpForm" "contactInfo1 signUpForm" "contactInfo2 pageLinks" "copyright credits";
    *:not(div) {
      margin-bottom: 0;
    }
    .branding-link {
      grid-area: heading;
    }
    .contact-info-1 {
      grid-area: contactInfo1;
      display: flex;
      justify-content: flex-start;
      address {
        margin-right: 1.2rem;
      }
      > * {
        display: inline-block;
      }
    }
    .contact-info-2 {
      grid-area: contactInfo2;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .email {
        margin-right: 1.2rem;
      }
      svg {
        height: 29px;
        width: 29px;
        transition: 0.5s;
        .section {
          fill: var(--black);
        }
        &:hover {
          .section {
            fill: var(--midGray);
          }
          transition: 0.5s;
        }
      }
    }
    .instagram-link {
      display: none;
    }
    .instagram-link-medium {
      display: inline-block;
    }
    .copyright {
      grid-area: copyright;
    }
    .sign-up-form {
      grid-area: signUpForm;
      justify-self: start;
      .sign-up-heading {
        margin-bottom: 1rem;
      }

      .sign-up-input {
        display: flex;
        margin-bottom: 1.4rem;
        input {
          display: inline;
          width: auto;
        }
        button {
          display: inline;
          width: 11.5rem;
        }
      }
    }
    small {
      font-size: 1.8rem;
      &:nth-of-type(2) {
        font-size: 1rem;
      }
    }
    .page-links {
      grid-area: pageLinks;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      a {
        display: inline-block;
        &:first-of-type {
          margin-right: 1.2rem;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 4.5rem);
    grid-template-areas: "heading signUpForm pageLinks" "contactInfo1 signUpForm copyright" " contactInfo2 instagram credit";
    .instagram-link-medium {
      display: none;
    }
    .sign-up-form,
    .instagram-link {
      justify-self: center;
    }
    .instagram-link {
      display: inline-block;
      grid-area: instagram;
    }
    .page-links,
    .copyright,
    .credits {
      justify-self: end;
    }
  }
`;
