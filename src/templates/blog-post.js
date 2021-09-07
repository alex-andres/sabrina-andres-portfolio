import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
// import { SRLWrapper } from "simple-react-lightbox";
import { css } from "@emotion/core";
// import GalleryGrid from "../components/GalleryGrid";
import Gallery from '@browniebroke/gatsby-image-gallery'
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

const BlogPostTemplate = ({ data: { contentfulBlogPost: post } }) => {
  return (
    <>
      <SEO
        title={post.title}
        image={post?.heroImage?.fluid?.src}
        ogImage={post?.seoFbtwitterImage?.fixed?.src}
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
              margin: 5rem 0;
              @media screen and (min-width: 768px) {
                width: 60%;
              }
              img {
                width: 100%;
              }
              h1{
                margin-bottom: 4rem;
              }
              .body-container{
                p{
                  margin: 2rem 0;
                }
                img + p{
                  margin: 0rem 0 2rem;
                  i{
                    font-size: 1.4rem;
                    
                  }
                }
                blockquote{
                  p{
                    margin: 0;
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                  }
                }
                margin-bottom: 5rem;
              }
            `}
          >
            <h1 className="section-headline">{post.title}</h1>
            {/* <p
              style={{
                display: "block",
              }}
            >
              {post.publishDate}
            </p> */}
            <div className="body-container">{documentToReactComponents(post.body.json, options)}</div>
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
              {/* <SRLWrapper> */}
                {/* <div
                  css={css`
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
                    grid-gap: 0 1%;
                    grid-auto-rows: 10.2px;
                    justify-items: center;
                  `}
                > */}
                  {/* {post.gallery.map((image) => (
                    <GalleryGrid image={image} key={image.id} />
                  ))} */}
                  <Gallery images={post.gallery} />
                {/* </div> */}
              {/* </SRLWrapper> */}
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
      seoFbtwitterImage {
        fixed(width: 990, height: 500) {
          ...GatsbyContentfulFixed
        }
      }
      body {
        json
      }
      gallery {
        thumb: fluid(maxWidth: 270, maxHeight: 270) {
          ...GatsbyContentfulFluid
        }
        full: fluid(maxWidth: 1024) {
          ...GatsbyContentfulFluid
        }
        description
        id
      }
    }
  }
`;
