import React from "react";
import useProjects from "../hooks/use-projects";
import ProjectPreview from "../components/project-preview";
import { css } from "@emotion/core";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

export default () => {
  const projects = useProjects();
  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
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
    <div>
      <SEO
        title="Art Exhibition Curation and Events in Los Angeles & Zurich"
        description="Sabrina’s past involvement in the conception and realization of exhibitions and educational programs in cultural and commercial settings."
      />
      <div
        css={css`
          max-width: 90vw;
          margin: 9rem auto;
        `}
      >
        <motion.h1
        initial="hidden"
        animate="visible"
        variants={slideUp}
          css={css`
            margin-bottom: 1.5rem;
          `}
        >
          Projects
        </motion.h1>
        <motion.div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            grid-gap: 2rem;
          `}
          initial="hidden"
        animate="visible"
        variants={slideUpDelayedChildren}
        >
          {projects.map((project) => (
            <ProjectPreview  
        variants={slideUp} key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
