import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";
import { motion } from "framer-motion";
import Img from "gatsby-image";
import Button from "./Button";

const Hero = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "connor-addison.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageVariants = {
    offScreen: {
      x: -800,
    },
    onScreen: {
      x: 0,
      transition: {
        delay: 0.6,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="hero-container"
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "claim" "slider";
        gap: 1rem;

        @media screen and (min-width: 768px) {
          grid-template-areas: "slider claim";
          grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (min-width: 1024px) {
          gap: 6rem;
          grid-template-areas: "slider slider slider claim claim claim claim";
          grid-template-columns: repeat(7, 1fr);
          max-height: 100%;
        }
      `}
    >
      <motion.div
        variants={imageVariants}
        initial="offScreen"
        animate="onScreen"
        className="image-wrapper"
        css={css`
          grid-area: slider;
          width: 100%;
          height: 100%;
        `}
      >
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Connor Addison"
          title="Connor Addison - Name of Work - 2018"
        />
      </motion.div>
      <motion.div
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
        className="claim-cta-wrapper"
        css={css`
          grid-area: claim;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin: 2rem auto 3rem;
          width: calc(100% - 40px * 2);
          @media screen and (min-width: 768px) {
            margin: 0 3rem;
            justify-content: flex-start;
          }
          @media screen and (min-width: 1200px) {
            justify-content: center;
          }
        `}
      >
        <h1
          className="hero-h1"
          css={css`
            margin-bottom: 2.2rem;
          `}
        >
          What art will you discover today?
        </h1>
        <p
          className="hero-sub-heading"
          css={css`
            margin-bottom: 2rem;
            @media screen and (min-width: 1024px) {
              font-size: 2.4rem;
              margin-bottom: 3rem;
            }
          `}
        >
          Sabrina takes the hard work out of finding emerging and established
          artists
        </p>
        <Button to="/projects">View Projects</Button>
      </motion.div>
    </div>
  );
};

export default Hero;
