import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { motion } from "framer-motion";

const TwoColumnLayout = ({ content }) => {
  // const imageVariants = {
  //   hidden: {
  //     x: 800,
  //   },
  //   visible: {
  //     x: 0,
  //     transition: {
  //       duration: 1.5,
  //       ease: "easeInOut",
  //     },
  //   },
  // };
  // const textVariants = {
  //   hidden: {
  //     x: -800,
  //   },
  //   visible: {
  //     x: 0,
  //     transition: {
  //       duration: 1.5,
  //       ease: "easeInOut",
  //     },
  //   },
  // };

  return (
    <div
      css={css`
        display: grid;
        width: 100%;
        margin: 5rem auto;
        padding: 0 3vw;
        grid-template-columns: 3fr 4fr;
        grid-template-areas:
          "heading main"
          "heading img";
        grid-gap: 30px;
        @media screen and (max-width: 800px) {
          grid-template-columns: 1fr;
          grid-template-areas: "heading" "main" "img";
          padding: 0 3rem;
          grid-gap: 30px;
          width: 100%;
          margin: 5rem auto;
        }
      `}
    >
      <div
        className="heading"
        css={css`
          grid-area: heading;
        `}
        // initial="hidden"
        // animate="visible"
        // variants={textVariants}
      >
        <h1>{content.heading}</h1>
      </div>
      <div
        className="main"
        css={css`
          grid-area: main;
          margin-bottom: 3rem;
        `}
      >
        {documentToReactComponents(content.body)}
      </div>
      <div
        css={css`
          grid-area: img;
        `}
      >
        <Img
          css={css`
            margin-bottom: 1rem;
          `}
          fluid={content.image}
          alt={content.alt}
        />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
