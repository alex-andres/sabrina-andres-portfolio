import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const TeaserSmall = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "small-teaser-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
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
  const controls = useAnimation();
  const [ref3, inView3] = useInView({ threshold: 0.15 });
  useEffect(() => {
    if (inView3) {
      controls.start("visible");
    }
  }, [controls, inView3]);

  return (
    <motion.div
      ref={ref3}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      css={css`
        margin-top: 7rem;
        display: grid;
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
        alt="Emil Klein Untitled Painting, White Canvas with Abstract Black fluid lines, painting hung in Living Room setting"
        title="Emil Michael Klein
Untitled, 2014-2015
Oil on canvas
191 x 110 x 3 cm (75 1/4 x 43 1/4 x 1 1/8 in)
Private Collection, Copenhagen, DK"
      />
      <motion.div
        variants={textVariants}
        className="text-container"
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto 6rem;
          width: calc(100% - 40px * 2);
          grid-area: text;
        `}
      >
        <p
          css={css`
            line-height: 2;
            font-size: 2rem;
          `}
        >
          Sabrina fosters meaningful and long lasting professional relationships
          by prioritizing her client’s needs through her refreshingly
          approachable communication skills and her emphasis on accountability.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeaserSmall;
