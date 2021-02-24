import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import ArticlePreview from "../components/article-preview";
import { css } from "@emotion/core";
import Button from "../components/Button";
// import { motion } from "framer-motion";

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges;
    // const slideUp = {
    //   hidden: { y: 20, opacity: 0 },
    //   visible: {
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //       ease: "easeOut",
    //       duration: 0.75,
    //     },
    //   },
    // };
    // const slideUpDelayedChildren = {
    //   hidden: { y: 20, opacity: 0 },
    //   visible: {
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //       delayChildren: 0.1,
    //       staggerChildren: 0.2,
    //       ease: "easeOut",
    //       duration: 0.75,
    //     },
    //   },
    // };
    // const slideUpDelay = {
    //   hidden: { y: 20, opacity: 0 },
    //   visible: {
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //       delay: .8,
    //       ease: "easeOut",
    //       duration: 0.75,
    //     },
    //   },
    // };

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
            margin: 9rem auto;
          `}
        >
          <h1
          
            css={css`
              margin-bottom: 1.5rem;
            `}
          >
            Blog
          </h1>
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
                    <div
                      
                      css={css`
                        display: flex;
                        justify-self: center;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        * + *{
                          margin-top: 1rem;
                        }
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
                      <div><Button to={node.slug}> Read More </Button></div>
                    </div>
                    <div
                      
                    >
                      <Img
                        alt={node.heroImage.description}
                        fluid={node.heroImage.fluid}
                      />
                    </div>
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
