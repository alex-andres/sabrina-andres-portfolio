import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "gatsby-background-image";
import { motion, useAnimation } from "framer-motion";

const TeaserLarge = ({ className, backgroundImage, claimText }) => {
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
      <StyledBackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundImage}
        backgroundColor={`#fff`}
        style={{ backgroundPostion: "", backgroundSize: "" }}
      >
        <div className="text-container">
          <motion.h2
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={textVariants}
            css={css`
              width: 100%;
              @media (min-width: 768px) {
                width: 75%;
              }
            `}
          >
            {claimText}
          </motion.h2>
        </div>
      </StyledBackgroundImage>
    </motion.div>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  background-position: top center;
  padding-bottom: 161%;
  min-width: 100%;
  min-height: 100%;
  @media screen and (min-width: 768px) {
    padding-bottom: 95.9%;
  }
  &:before,
  &:after {
    background-position: top center;
    background-size: contain;
    min-width: 100%;
    min-height: 100%;
  }
  .text-container {
    margin: 10% auto 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 25%;
    @media (min-width: 768px) {
      left: 25%;
      width: 50%;
      height: 75%;
      justify-content: flex-start;
    }
  }
`;
export default TeaserLarge;
