import { graphql, useStaticQuery } from 'gatsby';

const useAbout = () => {
  const data = useStaticQuery(graphql`
  query  {
    allContentfulAboutPage {
      nodes {
        heading
        bodyText {
          json
        }
        image {
          fluid {
            base64 
            aspectRatio 
            src 
            srcSet 
            sizes 
          }
        }
      }
    }
  }
  `);
  return {
    heading: data.allContentfulAboutPage.nodes[0].heading,
    body: data.allContentfulAboutPage.nodes[0].bodyText.json,
    image: data.allContentfulAboutPage.nodes[0].image.fluid,
    alt: data.allContentfulAboutPage.nodes[0].image.description,
  };

};

export default useAbout;
