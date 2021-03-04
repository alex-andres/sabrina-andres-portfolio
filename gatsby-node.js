const Promise = require("bluebird");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then((res) => res.data);
  blogPost.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug}/`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.slug,
      },
    });
  });

  const projects = await graphql(
    `
      {
        allContentfulProject {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then((res) => res.data);

  projects.allContentfulProject.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.slug}/`,
      component: path.resolve("./src/templates/project-post-contentful.js"),
      context: {
        slug: node.slug,
      },
    });
  });
};