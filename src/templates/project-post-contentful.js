import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { SRLWrapper } from 'simple-react-lightbox';

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
    <Layout>
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
      <SRLWrapper>
      {data.contentfulProject.gallery.map((image) => (
        <Img
          fluid={image.fluid}
          alt={data.contentfulProject.image.description}
          key={data.contentfulProject.image.id}
        />
      ))}
      </SRLWrapper>
    </Layout>
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
