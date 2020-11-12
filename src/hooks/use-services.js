import { graphql, useStaticQuery } from 'gatsby';

const useServices = () => {
  const data = useStaticQuery(graphql`
  query  {
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
    heading: data.allContentfulServicesPage.nodes[0].heading,
    description: data.allContentfulServicesPage.nodes[0].description.json,
    services: data.allContentfulServicesPage.nodes[0].services.json,
    image: data.allContentfulServicesPage.nodes[0].image.fluid,
    alt: data.allContentfulServicesPage.nodes[0].image.description,
  };

};

export default useServices;