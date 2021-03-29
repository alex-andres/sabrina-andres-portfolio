import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import SEO from "./SEO";
import Img from "gatsby-image";

const ServicesLayout = ({ content }) => {

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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    
    rootMargin: "-100px 0px",
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <>
      <div
        css={css`
          width: 100%;
          margin: 9rem auto 2rem;
          padding: 0 3vw;
          display: grid;
          grid-template-areas: "heading" "main";
          grid-template-columns: 1fr;
          grid-gap: 30px;
          h1{
            margin-bottom: 3rem;
          }
          @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "heading main";
            column-gap: 50px;
          }
          @media screen and (min-width: 900px) {
            grid-gap: 150px;
          }
        `}
      >
        <SEO
          title="Art Acquisition, Sales & Curation in Los Angeles & Zurich"
          description="Sabrina offers a wide range of services including: Acquisitions and Sales, Art Collection Management, Curating and Research, Coordination of Art Handling"
        />
        <motion.div
          className="heading"
          css={css`
            grid-area: heading;
          `}
        >
          <motion.h1 initial="hidden"
          animate="visible"
          variants={slideUp}>{content.heading}</motion.h1>
          <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpDelay}
            css={css`
              margin-bottom:   3rem;
            `}
          >
            {documentToReactComponents(content.description)}
          </motion.div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideUpDelay2}
          className="main"
          css={css`
            grid-area: main;
            margin-bottom: 3rem;
            @media screen and (min-width: 768px) {
              margin-top: 7.2rem;
            }
            p{
              margin-bottom: 1rem;
            }
            .servicesHeading{
              @media screen and (min-width: 768px) {
                display: none;
              }
              strong{
                font-weight: 600;
              }
            }
            ul{
              padding-inline-start: 2.6rem;
            }
          `}
        >
          <p className="servicesHeading"><strong>Services Include:</strong></p>
          {documentToReactComponents(content.services)}
        </motion.div>
      </div>
      <motion.div
        variants={slideUp}
        animate={controls}
        initial="hidden"
        ref={ref}
      >
        <Img
          css={css`
            display: block;
            width: 94vw;
            margin: 0 3vw;
          `}
          
          fluid={content.image.fluid}
          alt={content.image.description}
          title={content.image.description}
        />
      </motion.div>
    </>
  );
};

export default ServicesLayout;
