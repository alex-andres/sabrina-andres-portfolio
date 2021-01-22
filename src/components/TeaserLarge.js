import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "gatsby-background-image";
import { motion, useAnimation } from "framer-motion";

const TeaserLarge = ({
  className,
  backgroundImage,
  claimHeading,
  claimBody,
  backgroundTitle,
}) => {
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
        title={backgroundTitle}
      >
        <motion.div
          className="text-container"
          ref={ref2}
          animate={controls}
          initial="hidden"
          variants={textVariants}
        >
          <h2>{claimHeading}</h2>
          <p>{claimBody}</p>
        </motion.div>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25%;
    @media screen and (min-width: 768px) {
      left: 0;
      width: 50%;
      height: 75%;
      h2 {
        font-size: 4rem;
        width: 43rem;
        margin-bottom: 1.5rem;
      }
      p {
        width: 43rem;
      }
    }
  }
`;
export default TeaserLarge;
