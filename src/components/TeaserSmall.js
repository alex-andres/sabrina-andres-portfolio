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
        ${'' /* margin-top: 3rem; */}
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
Courtesy of the artist and Galerie Francesca Pia
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
          margin: 4rem auto;
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
          Sabrina fosters meaningful and long lasting professional relationships
          by prioritizing her client’s needs through her refreshingly
          approachable communication skills and her emphasis on accountability.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeaserSmall;
