import React, { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import BackgroundImage from "gatsby-background-image";
import { motion, useAnimation } from "framer-motion";
import { VisitedContext } from "../contexts/VisitedContext";

const TeaserLarge = ({
  className,
  backgroundImage,
  claimHeading,
  claimBody,
  backgroundTitle,
}) => {
  const [visited] = useContext(VisitedContext);
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

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView && visited) {
      controls.start("visible");
    }
  }, [controls, inView, visited]);
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView2 && visited) {
      controls.start("visible");
    }
  }, [controls, inView2, visited]);
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView3 && visited) {
      controls.start("visible");
    }
  }, [controls, inView3, visited]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={slideUp}
    >
      <StyledBackgroundImage
        Tag="section"
        className={className}
        fluid={backgroundImage}
        backgroundColor={`#fff`}
        style={{ backgroundPostion: "", backgroundSize: "" }}
        title={backgroundTitle}
      >
        <div className="text-container">
          <motion.h2
            ref={ref2}
            animate={controls}
            initial="hidden"
            variants={slideUp}
          >
            {claimHeading}
          </motion.h2>
          <motion.p
            ref={ref3}
            animate={controls}
            initial="hidden"
            variants={slideUp}
          >
            {claimBody}
          </motion.p>
        </div>
      </StyledBackgroundImage>
    </motion.div>
  );
};

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  background-position: top center;
  padding-bottom: 239%;
  min-width: 100%;
  height: 0;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 350px){
    padding-bottom: 198%;
  }
  @media screen and (min-width: 500px) {
    padding-bottom: 160.8%;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 91.5%;
  }
  @media screen and (min-width: 1920px) {
    padding-bottom: 67.2%;
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
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 75%;
    h2 {
      font-size: 2.6rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
    @media screen and (min-width: 600px) {
      justify-content: center;
    }
    @media screen and (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 25%;
      width: 40%;
      height: 62%;
      margin-top: 28%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        font-size: 3.9rem;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 1.8rem;
      }
    }
    @media screen and (min-width: 1000px) {
      p {
        font-size: 2rem;
      }
    }
    @media screen and (min-width: 1520px) {
      margin-top: 24%;
    }
  }
`;
export default TeaserLarge;
