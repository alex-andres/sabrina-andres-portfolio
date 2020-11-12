import { graphql, useStaticQuery } from 'gatsby';

const useImage = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bernard-hermant-interior.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return image.image.sharp.fluid;
};

export default useImage;
