import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TeaserLarge from "./TeaserLarge";

const TeaserLarge2 = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "large-teaser-2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const imageData = data.image.childImageSharp.fluid;
  const backgroundImage = [
    `linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0) 50%)`,
    imageData,
  ];
  return (
    <TeaserLarge
      backgroundImage={backgroundImage}
      claimText={"Here is a claim"}
      className={"teaserLarge2"}
    />
  );
};
export default TeaserLarge2;
