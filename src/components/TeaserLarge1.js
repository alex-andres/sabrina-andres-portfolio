import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TeaserLarge from "./TeaserLarge";

const TeaserLarge1 = ({ className }) => {
  const { desktopImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "large-teaser-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const source = desktopImage.childImageSharp.fluid;
  // const sources = [
  //   mobileImage.childImageSharp.fluid,
  //   {
  //     ...desktopImage.childImageSharp.fluid,
  //     media: `(min-width:530px)`,
  //   },
  // ];
  return (
    <TeaserLarge
      backgroundImage={source}
      claimText={"Here is a claim"}
      className={"teaserLarge1"}
    />
  );
};

export default TeaserLarge1;
