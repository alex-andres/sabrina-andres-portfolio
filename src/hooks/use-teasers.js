import { graphql, useStaticQuery } from 'gatsby';

const useTeasers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeaser {
        nodes {
          id
          body {
            body
          }
          heading
          image {
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
            }
            description
          }
        }
      }
    }
  `);
  return data.allContentfulTeaser.nodes.map(teaser => ({
    heading: teaser.heading,
    body: teaser.body.body,
    image: teaser.image.fluid,
    alt: teaser.image.description,
    id: teaser.id,
  }));
};

export default useTeasers;
