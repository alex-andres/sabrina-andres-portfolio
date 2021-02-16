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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 1,
      },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 25, x: "-50%" },
    visible: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 5.25,
      },
    },
    delay: {
      opacity: 1,
      y: 0,
      x: "-50%",
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 5.25,
      },
    },
  };
  const controls = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  useEffect(() => {
    // if (inView2 && visited) {
    //   controls.start("visible");
    // } else {
    controls.start("visible");
  }, [controls, inView2, visited]);
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
  padding-bottom: 198%;
  min-width: 100%;
  height: 0;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 500px) {
    padding-bottom: 160.8%;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 91.5%;
  }
  @media screen and (min-width: 2138px) {
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
    width: 80%;
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
  }
`;
export default TeaserLarge;
