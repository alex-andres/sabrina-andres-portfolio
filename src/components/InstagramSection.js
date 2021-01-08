import React, { useEffect } from "react";
import InstaCard from "./InstaCard";
import useInstagram from "../hooks/use-instagram";
import { useInView } from "react-intersection-observer";
import { css } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";

export default () => {
  const posts = useInstagram();

  const controls = useAnimation();
  const [ref6, inView6] = useInView({ threshold: 0.1 });
  useEffect(() => {
    if (inView6) {
      controls.start("visible");
    }
  }, [controls, inView6]);
  const igVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.75,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      css={css`
        width: 90vw;
        max-width: 1560px;
        margin: 0 auto;
      `}
      ref={ref6}
      animate={controls}
      initial="hidden"
      variants={igVariants}
    >
      <h2
        css={css`
          margin-bottom: 3.5rem;
          text-align: center;
        `}
      >
        Follow <a href="https://www.instagram.com/sab_rina_n/">@sab_rina_n</a>{" "}
        on Instagram
      </h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.8rem;
          max-width: 954px;
          margin: 0 auto;
          justify-items: center;
        `}
      >
        {posts.map((post) => (
          <InstaCard key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};
