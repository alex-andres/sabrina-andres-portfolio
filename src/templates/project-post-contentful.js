import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";
import { SRLWrapper } from "simple-react-lightbox";
import GalleryGrid from "../components/GalleryGrid";
import SEO from "../components/SEO";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields.title["en-US"];
      const url = node.data.target.fields.file["en-US"].url;
      return <img alt={alt} src={url} />;
    },
  },
};

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
const slideUpDelay = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .2,
      ease: "easeOut",
      duration: 0.75,
    },
  },
};
const slideUpDelay2 = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .4,
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

const ProjectTemplate = ({ data: { contentfulProject: project } }) => {
  if (project.gallery) {
    return (
      <>
        <SEO
          title={project.title}
          image={project.image.fluid.src}
          description={project.seoDescription}
        />
        <div
          className="project-wrapper"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 9rem;
          `}
        >
          <div
            css={css`
              width: 90vw;
              * + * {
                margin-top: 1rem;
              } 
              @media screen and (min-width: 768px) {
                width: 60%;
              }
              img {
                width: 100%;
              }
            `}
          >
            <motion.h1
            initial="hidden"
            animate="visible"
            variants={slideUp}
              css={css`
                margin: 2rem 0;
              `}
            >
              {project.title}
            </motion.h1>
            <div>
              {documentToReactComponents(project.content.json, options)}
              <Img
                fluid={project.image.fluid}
                alt={project.image.description}
                key={project.image.id}
              />
            </div>
            <h2
              css={css`
                margin: 2rem 0;
              `}
            >
              Gallery
            </h2>
            <SRLWrapper>
              <div
                css={css`
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
                  grid-gap: 0 1%;
                  grid-auto-rows: 10.2px;
                  justify-items: center;
                `}
              >
                {project.gallery?.map((image) => (
                  <GalleryGrid image={image} key={image.id} />
                ))}
              </div>
            </SRLWrapper>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <SEO
          title={project.title}
          image={project.image.fluid.src}
          description={project.seoDescription}
        />
        <div
          className="project-wrapper"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 9rem;
          `}
        >
          <div
            css={css`
              width: 90vw;
              * + * {
                margin-top: 1rem;
              } 
              @media screen and (min-width: 768px) {
                width: 60%;
              }
              img {
                width: 100%;
              }
            `}
          >
            <motion.h1
              initial="hidden"
            animate="visible"
            variants={slideUp}
              css={css`
                margin-bottom: 2rem;
              `}
            >
              {project.title}
            </motion.h1>
            <div>
              <motion.div
                initial="hidden"
            animate="visible"
            variants={slideUpDelay}
              >
              {documentToReactComponents(project.content.json, options)}
              </motion.div>
              <motion.div
              initial="hidden"
            animate="visible"
            variants={slideUpDelay2}
            >
                <Img
                  fluid={project.image.fluid}
                  alt={project.image.description}
                  key={project.image.id}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default ProjectTemplate;

export const projectQuery = graphql`
  query ProjectById($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      content {
        json
      }
      title
      author
      image {
        fluid(background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        description
        id
      }

      seoDescription
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;

// gallery {
//   fluid(background: "rgb:000000") {
//     ...GatsbyContentfulFluid
//   }
//   description
//   id
// }
