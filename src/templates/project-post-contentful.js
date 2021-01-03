import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { SRLWrapper } from "simple-react-lightbox";
import GalleryGrid from "../components/GalleryGrid";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields.title["en-US"];
      const url = node.data.target.fields.file["en-US"].url;
      return <img alt={alt} src={url} />;
    },
  },
};

const ProjectTemplate = ({ data }) => {
  return (
    <div
      className="project-wrapper"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
      `}
    >
      <div
        css={css`
          width: 90vw;
          @media screen and (min-width: 768px) {
            width: 60%;
          }
          img {
            width: 100%;
          }
        `}
      >
        <h1>{data.contentfulProject.title}</h1>
        <div>
          {documentToReactComponents(
            data.contentfulProject.content.json,
            options
          )}
          <Img
            fluid={data.contentfulProject.image.fluid}
            alt={data.contentfulProject.image.description}
            key={data.contentfulProject.image.id}
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
            {data.contentfulProject.gallery.map((image) => (
              <GalleryGrid image={image} key={image.id} />
            ))}
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
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
      gallery {
        fluid(background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        description
        id
      }
      date(formatString: "MMMM Do, YYYY")
    }
  }
`;
