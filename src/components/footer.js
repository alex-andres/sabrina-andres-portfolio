import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import SignUpForm from "./SignUpForm";
import InstagramLink from "./InstagramLink";

const Footer = () => {
  const controls = useAnimation();
  const [ref7, inView7] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView7) {
      controls.start("visible");
    }
  }, [controls, inView7]);
  const animationVariants = {
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
      variants={animationVariants}
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
        <InstagramLink className="instagram-link-medium" />
      </div>
      <SignUpForm className="sign-up-form" />
      <div className="page-links">
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <InstagramLink className="instagram-link-small" />
      </div>

      <small className="copyright">© 2020 Sabrina Andres Art Advisory </small>
      <small className="credits">
        Crafted with Love by{" "}
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
  background-color: var(--darkGray);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
  h1,
  address,
  a,
  input,
  button,
  small {
    margin-bottom: 1.6rem;
    color: var(--white);
  }
  h1 {
    font-size: 2.4rem;
    margin-bottom: 0;
  }
  a {
    color: var(--white);
    display: inline-block;
    transition: color 0.5s;
    &:hover {
      transition: color 0.5s;
      color: var(--midGray);
    }
  }
  .instagram-link-small {
    svg {
      height: 29px;
      width: 29px;
      transition: fill 0.5s;
      .section {
        fill: var(--white);
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
    grid-template-rows: repeat(6, 5.7rem);
    justify-items: center;
    column-gap: 7.2rem;
    grid-template-areas: "heading signUpForm" "contactInfo1 signUpForm" "contactInfo2 signUpForm" "pageLinks signUpForm" "credits signUpForm" "copyright signUpForm";
    *:not(div) {
      margin-bottom: 0;
    }
    .branding-link {
      grid-area: heading;
    }
    .contact-info-1 {
      width: 29.86rem;
      grid-area: contactInfo1;
      display: flex;
      justify-content: space-between;
      > * {
        display: inline-block;
      }
    }
    .contact-info-2 {
      grid-area: contactInfo2;
      display: flex;
      width: 29.86rem;
      justify-content: space-between;
      align-items: center;
      .instagram-link-medium {
        display: inline-block;
        svg {
          height: 29px;
          width: 29px;
          transition: fill 0.5s;
          .section {
            fill: var(--white);
          }
          &:hover {
            .section {
              fill: var(--midGray);
              transition: fill 0.5s;
            }
          }
        }
      }
    }

    .copyright {
      grid-area: copyright;
    }
    .credits {
      grid-area: credits;
    }
    .sign-up-form {
      grid-area: signUpForm;
      width: 23.4rem;
      margin: 0;
    }
    small {
      font-size: 1.8rem;
    }
    .page-links {
      grid-area: pageLinks;
      display: flex;
      flex-direction: row;
      width: 29.86rem;
      justify-content: space-evenly;
      a {
        display: inline-block;
      }
      .instagram-link-small {
        display: none;
      }
    }
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 44rem 1fr;
    gap: 0px;
    width: 100%;
    grid-template-rows: repeat(3, 7.7rem);
    grid-template-areas: "heading signUpForm pageLinks" "contactInfo1 signUpForm copyright" " contactInfo2 signUpForm credits";
    align-items: stretch;
    height: 33rem;
    .branding-link,
    .contact-info-1,
    .contact-info-2 {
      justify-self: start;
    }
    .branding-link,
    .page-links {
      align-self: start;
    }
    .contact-info-1,
    .copyright {
      align-self: center;
    }
    .contact-info-2,
    .credits {
      align-self: end;
    }

    .contact-info-2 {
      .instagram-link-medium {
        display: none;
      }
    }
    .sign-up-form,
    .instagram-link {
      justify-self: center;
    }
    .sign-up-form {
      display: grid;
      width: 44rem;
    }

    .page-links,
    .copyright,
    .credits {
      justify-self: end;
    }
    .page-links {
      justify-content: space-between;
      .instagram-link-small {
        display: inline-block;
        svg {
          height: 29px;
          width: 29px;
          transition: fill 0.5s;
          .section {
            fill: var(--white);
          }
          &:hover {
            .section {
              fill: var(--midGray);
              transition: fill 0.5s;
            }
          }
        }
      }
    }
  }
`;
