import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import ArticlePreview from "../components/article-preview";
import { css } from "@emotion/core";
import Button from "../components/Button";
import { motion } from "framer-motion";

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges;

    const imageVariants = {
      hidden: {
        x: 800,
      },
      visible: {
        x: 0,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    };
    const textVariants = {
      hidden: {
        x: -800,
      },
      visible: {
        x: 0,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      },
    };

    return (
      <>
        <Helmet
          title="Artist Interviews, Artist Picks and Blog Posts"
          description="Stay up to date with Sabrina’s artist picks, personal highlights, interviews and other stories from the art world."
        />
        <div
          css={css`
            background: white;
            max-width: 1560px;
            width: 90vw;
            margin: 0 auto;
          `}
        >
          <div
            css={css`
              display: grid;
              @media screen and (max-width: 600px) {
                grid-template-columns: 1fr;
              }
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 20px;
            `}
          >
            {posts.map(({ node }, index) => {
              if (index === 0) {
                return (
                  <div
                    css={css`
                      @media screen and (max-width: 600px) {
                        grid-column: span 1;
                        grid-template-columns: 1fr;
                      }
                      grid-column: span 3;
                      display: grid;
                      grid-template-columns: 3fr 2fr;
                      margin-bottom: 3rem;
                    `}
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      css={css`
                        display: flex;
                        justify-self: center;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        @media screen and (max-width: 600px) {
                          grid-row-start: 2;
                        }
                      `}
                    >
                      <h1
                        css={css`
                          margin-bottom: 1.5rem;
                        `}
                      >
                        {node.title}
                      </h1>
                      <p>{node.publishDate}</p>
                      <p>{node.description.description}</p>
                      <Button to={node.slug}> Read More </Button>
                    </motion.div>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={imageVariants}
                    >
                      <Img
                        alt={node.heroImage.description}
                        fluid={node.heroImage.fluid}
                      />
                    </motion.div>
                  </div>
                );
              } else {
                return (
                  <div key={node.slug}>
                    <ArticlePreview article={node} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxHeight: 800, maxWidth: 800) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;
