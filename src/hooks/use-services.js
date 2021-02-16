import { graphql, useStaticQuery } from "gatsby";

const useServices = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulServicesPage {
        nodes {
          heading
          description {
            json
          }
          services {
            json
          }
          image {
            fluid(maxWidth: 1000, quality: 100) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            description
          }
        }
      }
    }
  `);
  return {
    heading: data.allContentfulServicesPage.nodes[0].heading,
    description: data.allContentfulServicesPage.nodes[0].description.json,
    services: data.allContentfulServicesPage.nodes[0].services.json,
    image: data.allContentfulServicesPage.nodes[0].image,
  };
};

export default useServices;
