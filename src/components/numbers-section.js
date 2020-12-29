import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const NumbersSection = () => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      css={css`
        margin: 6rem auto;
        width: 90%;
        @media (min-width: 1024px) {
          margin: 10rem 10rem 15rem;
        }
      `}
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={container}
      >
        <motion.h2
          css={css`
            margin-bottom: 4.5rem;
            font-size: 3rem;
          `}
          variants={item}
        >
          Sabrina's Work by the Numbers
        </motion.h2>
        <motion.ul
          css={css`
            display: grid;
            padding: 0;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            @media(min-width: 1024px){
            grid-template-columns: repeat(2, minmax(250px, 1fr));
            }
            gap: 20px;
            list-style: none;
            max-width: 90vw;
            font-s
          `}
        >
          <motion.li
            variants={item}
            css={css`
              font-size: 2rem;
              font-weight: 500;
            `}
          >
            Managed collections of 10,000 artworks
          </motion.li>
          <motion.li
            variants={item}
            css={css`
              font-size: 2rem;
              font-weight: 500;
            `}
          >
            Managed collections of 10,000 artworks
          </motion.li>
          <motion.li
            variants={item}
            css={css`
              font-size: 2rem;
              font-weight: 500;
            `}
          >
            Managed collections of 10,000 artworks
          </motion.li>
          <motion.li
            variants={item}
            css={css`
              font-size: 2rem;
              font-weight: 500;
            `}
          >
            Managed collections of 10,000 artworks
          </motion.li>
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default NumbersSection;
