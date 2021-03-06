import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default () => {
  const ContactTextContainer = styled.div`
    display: grid;
    max-width: 90vw;
    margin: 5rem auto;
    grid-template-columns: 1fr 1fr;
    .contact-info {
      grid-area: contact-info;
    }

    grid-template-areas: "contact-info form";
    grid-gap: 75px;
    @media screen and (max-width: 930px) {
      margin: 8rem auto 5rem;
      grid-template-areas:
        "contact-info contact-info"
        "form form";
      grid-gap: 30px;
    }
    .contact-info {
      a {
        color: var(--black);
        transition: color 0.5s ease-out;
        &:hover {
          color: var(--midGray);
          transition: color 0.5s ease-out;
        }
      }
      * + * {
        margin-top: 1rem;
      } 
    }
    .heading {
      margin-bottom: 2rem;
    }
    .contact-text {
      margin-bottom: 1rem;
    }
    .instagram-link {
      margin-top: 1rem;
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
          transition: 0.5s color ease-out;
        }
        transition: 0.5s color ease-out;
      }
    }
    ContactForm {
      grid-area: form;
    }
  `;
  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 1.5,
      },
    },
  };
  const slideUpDelay = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .2,
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };
  return (
    <ContactTextContainer>
      <SEO
        title="Contact Sabrina for Art Advisory in Los Angeles & Zurich"
        description="Get in touch with Sabrina through email: sabrina@sabrinaandres.com , sign up for her mailing list to receive news and updates."
      />
      <div
        className="contact-info"

      >
        <motion.div 
        className="heading" 
        initial="hidden"
        animate="visible"
        variants={slideUp}>
          <h1>Contact</h1>
        </motion.div>
        <motion.div className="contact-body"    
        initial="hidden"
        animate="visible"
        variants={slideUpDelay}>
          <p className="contact-text">
            If you have any inquiries or comments, please contact SAAA via email, or send a message using the contact form.
          </p>
          <p>
            <strong>Email</strong>
            <a
              css={css`
                margin-left: 2rem;
              `}
              href="mailto:sabrina@sbrinaandres.com"
              title="Send an email using your default mail client"
            >
              sabrina@sabrinaandres.com
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/sab_rina_n/"
              className="instagram-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 503.84 503.84"
                title="Instagram Logo"
                alt="Instagram Logo"
                css={css`
                h
              `}
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
          </p>
        </motion.div>
      </div>
      <ContactForm className="form" />
    </ContactTextContainer>
  );
};
