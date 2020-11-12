


import { graphql, useStaticQuery } from 'gatsby';

const useProjects = () => {
  const data = useStaticQuery(graphql`
    query ProjectIndexQuery {
      allContentfulProject(sort: { fields: [date], order: DESC }) {
        edges{
          node {
            title
            subtitle
            author
            slug
            image {
              fluid {
                srcWebp
                srcSetWebp
                src
                srcSet
              }
              description
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return data.allContentfulProject.edges.map(({node}) => ({
    title: node.title,
    subtitle: node.subtitle,
    slug: node.slug,
    id: node.id,
    image: node.image.fluid,
    alt: node.image.description,
  }));
};

export default useProjects;
