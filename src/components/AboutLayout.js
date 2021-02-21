import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import SEO from "./SEO";

const AboutLayout = ({ content }) => {
  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
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
  const slideUpDelay2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: .4,
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };

  return (
    <ContainerDiv>
      <SEO
        title="About Sabrina Andres, Los Angeles & Zurich based Art Advisor"
        description="Sabrina has a background in Curatorial Studies and an international network of collectors, galleries and artists to provide access to a wide range of artworks."
      />
      <motion.div
        className="heading"
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h1>{content.heading}</h1>
      </motion.div>
      <motion.div
        className="main"
        initial="hidden"
        animate="visible"
        variants={slideUpDelay2}
      >
        {documentToReactComponents(content.body)}
      </motion.div>
      <motion.div
        className="image-container"
        initial="hidden"
        animate="visible"
        variants={slideUpDelay}
      >
        <Img className="image" fluid={content.image} alt={content.alt} />
      </motion.div>
    </ContainerDiv>
  );
};

export default AboutLayout;

const ContainerDiv = styled.div`
  display: grid;
  width: 100%;
  margin: 8rem auto;
  padding: 0 3vw;
  grid-template-columns: 1fr;
  grid-template-areas: "heading" "main" "img";
  grid-gap: 30px;
  @media screen and (min-width: 800px) {
    grid-template-columns: 3fr 4fr;
    grid-template-areas:
      "heading heading"
      "img main";
    padding: 0 3rem;
  }
  .heading {
    grid-area: heading;
  }
  .main {
    grid-area: main;
    margin-bottom: 3rem;
  }
  .image-container {
    grid-area: img;
    .image {
      margin-bottom: 1rem;
      max-width: 50rem !important;
    }
  }
`;
