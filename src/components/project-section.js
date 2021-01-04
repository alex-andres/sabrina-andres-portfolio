import React, { useEffect } from "react";
import ProjectPreview from "./project-preview";
import useProjects from "../hooks/use-projects";
import { css } from "@emotion/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default () => {
  const projects = useProjects();
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const controls = useAnimation();
  const [ref5, inView5] = useInView({ threshold: 0.4 });
  useEffect(() => {
    if (inView5) {
      controls.start("visible");
    }
  }, [controls, inView5]);
  return (
    <motion.div
      ref={ref5}
      animate={controls}
      initial="hidden"
      variants={projectVariants}
      css={css`
        width: 90vw;
        margin: 7rem auto;
        padding: 4rem 0;
      `}
    >
      <h2
        css={css`
          margin: 0 0 5rem;
          @media screen and (min-width: 768px) {
            width: 65%;
          }
        `}
      >
        Interested in seeing some of Sabrina's Past work?
      </h2>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
          grid-gap: 2rem;
        `}
      >
        {projects.map((project) => (
          <ProjectPreview key={project.slug} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
