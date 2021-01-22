import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TeaserLarge from "./TeaserLarge";

const TeaserLarge2 = ({ className }) => {
  const {
    mobileImage,
    eigtheenEighty,
    twentyOneThirtyEight,
    desktopImage,
  } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "large-teaser-2/large-teaser-2-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1069) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        eigtheenEighty: file(
          relativePath: { eq: "large-teaser-2/large-teaser-2-1880.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1690) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        twentyOneThirtyEight: file(
          relativePath: { eq: "large-teaser-2/large-teaser-2-2138.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopImage: file(
          relativePath: { eq: "large-teaser-2/large-teaser-2.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...eigtheenEighty.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
    {
      ...twentyOneThirtyEight.childImageSharp.fluid,
      media: `(min-width: 1520px)`,
    },
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 1920px)`,
    },
  ];
  return (
    <TeaserLarge
      backgroundImage={sources}
      claimHeading={
        "Expanding knowledge of contemporary art through continued research"
      }
      claimBody={
        "Sabrina leverages her international network which allows for constant discovery of new markets, and provides her clients with the freshest insights in the artworld. "
      }
      className={"teaserLarge1"}
      backgroundTitle={`Ser Serpas
Untitled, 2019
Acrylic on paper
29 x 19 cm (11 3/8 x 7 1/2 in)
Private Collection, Zurich, CH`}
    />
  );
};
export default TeaserLarge2;
