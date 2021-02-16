import React from "react";
import { css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import SEO from "./SEO";
import Img from "gatsby-image";

const ServicesLayout = ({ content }) => {
  const imageVariants = {
    hidden: {
      x: 800,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  const textVariants = {
    hidden: {
      x: -800,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div
        css={css`
          width: 100%;
          margin: 9rem auto;
          padding: 0 3vw;
          display: grid;
          grid-template-areas: "heading" "main";
          grid-template-columns: 1fr;
          grid-gap: 30px;
          @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "heading main";
            grid-gap: 50px;
          }
          @media screen and (min-width: 900px) {
            grid-gap: 150px;
          }
        `}
      >
        <SEO
          title="Art Acquisition, Sales & Curation in Los Angeles & Zurich"
          description="Sabrina offers a wide range of services including: Acquisitions and Sales, Art Collection Management, Curating and Research, Coordination of Art Handling"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="heading"
          css={css`
            grid-area: heading;
          `}
        >
          <h1>{content.heading}</h1>
          <div
            css={css`
              margin: 1rem 0 3rem;
            `}
          >
            {documentToReactComponents(content.description)}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="main"
          css={css`
            grid-area: main;
            margin-bottom: 3rem;
            @media screen and (min-width: 768px) {
              margin-top: 7.2rem;
            }
          `}
        >
          {documentToReactComponents(content.services)}
        </motion.div>
      </div>
      <Img
        css={css`
          max-width: 80%;
          margin: 0 auto;
        `}
        fluid={content.image.fluid}
        alt={content.image.description}
        title={content.image.description}
      />
    </>
  );
};

export default ServicesLayout;
