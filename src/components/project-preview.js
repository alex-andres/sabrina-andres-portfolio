import React from "react";
import { css } from "@emotion/core";
// import styled from "@emotion/styled";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { motion } from "framer-motion";

const ProjectPreview = ({ project }) => {
  return (
    <motion.div>
      <BackgroundImage
        tag="article"
        className={project.title}
        fluid={project.image}
        backgroundColor={`#000000`}
        css={css`
          background-size: cover;
          height: 0;
          padding-top: 100%;
          overflow: hidden;
          position: relative;
          @media (max-width: 800px) {
            padding-top: 75%;
          }
        `}
      >
        <Link
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .hoverDiv {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 5;
            width: 100%;
            height: 100%;
            h2 {
              color: rgba(0, 0, 0, 0);
            }
            background-color: rgba(0, 0, 0, 0);
            transition: background-color 0.4s ease-in;
          }
            &:hover {
            .hoverDiv {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 1;
              background-color: rgba(0, 0, 0, 0.5);

              h2 {
                color: white;
                transition: color 0.4s ease-in;
              }
            }
          }
            }
          `}
          to={`/projects/${project.slug}`}
        >
          <div className="hoverDiv">
            <h2>{project.title}</h2>
          </div>
        </Link>
      </BackgroundImage>
    </motion.div>
  );
};

export default ProjectPreview;
