import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { SRLWrapper } from "simple-react-lightbox";
import { css } from "@emotion/core";
import GalleryGrid from "../components/GalleryGrid";
import SEO from "../components/SEO/SEO";

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const alt = node.data.target.fields.title["en-US"];
      const url = node.data.target.fields.file["en-US"].url;
      return <img alt={alt} src={url} />;
    },
  },
};

const BlogPostTemplate = ({ data: { contentfulBlogPost: post } }) => {
  return (
    <>
      <SEO
        title={post.title}
        image={post.heroImage.fluid.src}
        description={post.seoDescription}
      />
      <div
        css={css`
          background: #fff;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;
          `}
        >
          <div
            className="wrapper"
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
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p>
            {documentToReactComponents(post.body.json, options)}
            <div />
            <div
              css={css`
                margin: 0 auto;
              `}
            >
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
                  {post.gallery.map((image) => (
                    <GalleryGrid image={image} key={image.id} />
                  ))}
                </div>
              </SRLWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      seoDescription
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        json
      }
      gallery {
        fluid(background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
        description
        id
      }
    }
  }
`;
