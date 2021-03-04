import React, { useEffect } from "react";
import InstaCard from "./InstaCard";
import useInstagram from "../hooks/use-instagram";
import { useInView } from "react-intersection-observer";
import { css } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";

export default () => {
  const posts = useInstagram();

  const controls = useAnimation();
  const [ref6, inView6] = useInView({
    
    rootMargin: "-100px 0px",
  });
  useEffect(() => {
    if (inView6) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView6]);
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
  const slideUpDelayedChildren = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
        ease: "easeOut",
        duration: 0.75,
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
      variants={slideUpDelayedChildren}
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
          <InstaCard variants={slideUp} key={post.id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};
