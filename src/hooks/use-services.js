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
        }
      }
    }
  `);
  return {
    heading: data.allContentfulServicesPage.nodes[0].heading,
    description: data.allContentfulServicesPage.nodes[0].description.json,
    services: data.allContentfulServicesPage.nodes[0].services.json,
  };
};

export default useServices;
