import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const TeaserSmall2 = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "small-teaser-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.image.childImageSharp.fluid;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const textVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };
  const controls = useAnimation();
  const [ref3, inView3] = useInView({
    
    rootMargin: "-100px 0px",
  });
  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView3]);

  return (
    <motion.div
      ref={ref3}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      css={css`
        display: grid;
        margin-top: 2rem;
        margin-bottom: 7rem;
        grid-temlate-columns: 1fr;
        grid-template-areas: "text" "image";
        @media screen and (min-width: 767px) {
          margin-top: 12rem;
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "image text";
          grid-gap: 40px;
          margin-bottom: 12rem;
        }
      `}
    >
      <Img
        css={css`
          width: 100%;
          grid-area: image;
        `}
        fluid={imageData}
        className={className}
        alt="Stephanie Temma Hier's Re-group and Re-grout (Fukushima Daisy III), 2019 mounted on white wall"
        title="Stephanie Temma Hier
Re-group and Re-grout (Fukushima Daisy III), 2019
Oil on canvas with glazed stoneware frame
23 x 36 x 5 cm (9 x 14 x 2 in)
Courtesy of the artist and Bradley Ertaskiran
Private Collection, Los Angeles, CA, US"
      />
      <motion.div
        variants={textVariants}
        className="text-container"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 4rem auto 6rem;
          width: calc(100% - 40px * 2);
          grid-area: text;
          @media screen and (min-width: 768px) {
            margin: 0 auto;
          }
        `}
      >
        <p
          css={css`
            font-size: 1.6rem;
            @media screen and (min-width: 500px) {
              font-size: 1.8rem;
            }
            @media screen and (min-width: 1000px) {
              font-size: 2rem;
            }
          `}
        >
          Sabrina's adaptability, clear judgement, and creativity have proven powerful during these current unprecedented times. With social interactions currently limited, Sabrina strives to offer her clients a highly flexible means of advising.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeaserSmall2;
