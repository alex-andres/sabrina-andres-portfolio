import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";

const AboutLayout = ({ content }) => {
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
    <ContainerDiv>
      <motion.div
        className="heading"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1>{content.heading}</h1>
      </motion.div>
      <motion.div
        className="main"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {documentToReactComponents(content.body)}
      </motion.div>
      <motion.div
        className="image-container"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
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
