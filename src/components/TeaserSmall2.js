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
        display: grid;
        margin-bottom: 7rem;
        grid-temlate-columns: 1fr;
        grid-template-areas: "text" "image";
        @media screen and (min-width: 767px) {
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
        alt="Dominique Teufen's Einfalt, A framed photograph in a dark living room setting"
        title="Dominique Teufen
Einfalt, 2014
Hahnemühle photo rag mounted on aluminum, UV-glass
70 x 105 cm (27 1/2 x 41 3/8 in)
Edition of 5, plus 2 AP's"
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
        <h2
          css={css`
            margin-bottom: 2rem;
          `}
        >
          Teaser Small
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quis
          tenetur porro rem nobis quo repellat sequi pariatur eveniet
          voluptatum, repellendus tempora harum dolorum, dignissimos
          perferendis. Natus quidem iste ullam?
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TeaserSmall2;
