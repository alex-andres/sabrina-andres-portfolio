import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { motion } from "framer-motion";

const ProjectPreview = ({ project }) => {
  const TextContent = styled("div")`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-shadow: 1px 1px 5px white;
  `;

  return (
    <motion.div>
      <BackgroundImage
        tag="article"
        className={project.title}
        fluid={project.image}
        backgroundColor={`#000000`}
        css={css`
          background-size: 100%;
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
            border: 1.5rem solid #272727;
            @media (max-width: 500px) {
              border: 0.5rem solid #272727;
            }
            @media (max-width: 800px) {
              border: 1rem solid #272727;
            }
            transition: border 0.2s ease-in;
            &:hover {
              border: 1.5rem solid rgb(233, 233, 233);
              @media (max-width: 500px) {
                border: 0.5rem solid #272727;
              }
              @media (max-width: 800px) {
                border: 1rem solid #272727;
              }
            }
          `}
          to={`/projects/${project.slug}`}
        >
          <TextContent>
            <h2
              css={css`
                font-size: 4rem;
              `}
            >
              {project.title}
            </h2>
            <p
              css={css`
                font-size: 2rem;
              `}
            >
              {project.subtitle}
            </p>
          </TextContent>
        </Link>
      </BackgroundImage>
    </motion.div>
  );
};

export default ProjectPreview;
