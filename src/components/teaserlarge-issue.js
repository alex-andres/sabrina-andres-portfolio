import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "gatsby-background-image";
import { motion, useAnimation } from "framer-motion";

const UnstyledTeaserLarge = ({ className, backgroundImage, claimText }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.5,
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.75,
      },
    },
  };
  const controls = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.25 });
  useEffect(() => {
    if (inView2) {
      controls.start("visible");
    }
  }, [controls, inView2]);
  return (
    <motion.div
      ref={ref2}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
    >
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundImage}
        backgroundColor={`#000000`}
      >
        <div
          css={css`
            width: calc(100% - 40px * 2);
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 25%;
            @media screen and (min-width: 768px) {
              width: 75%;
              height: 75%;
              justify-content: flex-start;
            }
          `}
        >
          <motion.h2
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={textVariants}
            css={css`
              width: 100%;
              @media screen and (min-width: 768px) {
                width: 75%;
              }
            `}
          >
            {claimText}
          </motion.h2>
        </div>
      </BackgroundImage>
    </motion.div>
  );
};

const TeaserLarge = styled(UnstyledTeaserLarge)`
  width: 100%;
  background-position: center;
  min-height: 500px;
  height: auto;
  padding-bottom: 65%;
  max-height: 823px;
  background-size: 100%;
  @media screen and (min-width: 530px) {
    height: 120vh;
    background-size: cover;
    background-position: bottom right;
    width: auto;
  }
  margin-bottom: 7rem;
`;
export default TeaserLarge;
