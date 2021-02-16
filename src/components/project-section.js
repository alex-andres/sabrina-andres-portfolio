import React, { useEffect } from "react";
import ProjectPreview from "./project-preview";
import useProjects from "../hooks/use-projects";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default () => {
  const projects = useProjects();
  const projectVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };
  const controls = useAnimation();
  const [ref5, inView5] = useInView({ threshold: 0.05 });
  useEffect(() => {
    if (inView5) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView5]);
  return (
    <ProjectContainer
      ref={ref5}
      animate={controls}
      initial="hidden"
      variants={projectVariants}
    >
      <h2>Interested in seeing some of Sabrina's curatorial projects?</h2>
      <div className="grid-container">
        {projects.map((project) => (
          <ProjectPreview key={project.slug} project={project} />
        ))}
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  width: 90vw;
  margin: 7rem auto;
  h2 {
    margin: 0 0 5rem;
    @media screen and (min-width: 768px) {
      width: 65%;
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
  }
`;
