import React from "react";
import useProjects from "../hooks/use-projects";
import ProjectPreview from "../components/project-preview";
import { css } from "@emotion/core";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

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
  return (
    <motion.div animate="visible" initial="hidden" variants={projectVariants}>
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
        <h1
          css={css`
            margin-bottom: 1.5rem;
          `}
        >
          Projects
        </h1>
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
      </div>
    </motion.div>
  );
};
