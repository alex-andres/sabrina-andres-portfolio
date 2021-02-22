import React, { useEffect } from "react";
import ProjectPreview from "./project-preview";
import useProjects from "../hooks/use-projects";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        staggerChildren: 0.5,
        ease: "easeOut",
        duration: 0.75,
      },
    },
  };
  const controls = useAnimation();
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: truea});
  useEffect(() => {
    if (inView5) {
      controls.start("visible");
    } 
  }, [controls, inView5]);
  return (
    <ProjectContainer
      ref={ref5}
      animate={controls}
      initial="hidden"
      variants={slideUpDelayedChildren}
    >
      <h2>Interested in seeing some of Sabrina's curatorial projects?</h2>
      <div className="grid-container">
        {console.log(projects)}
        {projects.map((project) => (
          <ProjectPreview variants={slideUp}  key={project.slug} project={project} />
        ))}
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled(motion.div)`
  width: 90vw;
  margin: 7rem auto;
  h2 {
    @media screen and (min-width: 768px) {
      width: 65%;
    }
  }
  .grid-container {
    margin-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 2rem;
  }
`;
