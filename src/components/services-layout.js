import React from "react";
import { css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";

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
    <div
      css={css`
        width: 100%;
        margin: 5rem auto;
        padding: 0 3vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "heading main";
        grid-gap: 150px;
        @media (max-width: 800px) {
          grid-template-areas: "heading" "main";
          grid-template-columns: 1fr;
          grid-gap: 30px;
        }
      `}
    >
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
            margin-top: 1rem;
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
        `}
      >
        {documentToReactComponents(content.services)}
      </motion.div>
    </div>
  );
};

export default ServicesLayout;
