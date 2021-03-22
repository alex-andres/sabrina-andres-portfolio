import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TeaserLarge from "./TeaserLarge";

const TeaserLarge1 = ({ className }) => {
  const {
    mobileImage,
    tabletImage,
    eigtheenEighty,
    twentyOneThirtyEight,
    desktopImage,
  } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(
          relativePath: { eq: "large-teaser-1/large-teaser-1-mobile.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1069) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tabletImage: file(
          relativePath: { eq: "large-teaser-1/large-teaser-1-tablet.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1069) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        eigtheenEighty: file(
          relativePath: { eq: "large-teaser-1/large-teaser-1-1880.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1690) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        twentyOneThirtyEight: file(
          relativePath: { eq: "large-teaser-1/large-teaser-1-2138.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }

        desktopImage: file(
          relativePath: { eq: "large-teaser-1/large-teaser-1.jpg" }
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
      ...tabletImage.childImageSharp.fluid,
      media: `(min-width: 500px)`,
    },
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
      claimHeading="Facilitating investment in passion"
      claimBody="With a clearly defined and independent stance in the art field, Sabrina Andres Art Advisory creates tailored experiences for private collectors and corporations while adding tangible value to their collection."
      className={"teaserLarge1"}
      backgroundTitle={`Alex Becerra
Faces Faces Expansion, 2020
Oil on linen
61 x 45.7 cm (24 x 18 in)
Courtesy of the artist and Karma International
Private Collection, Nevada, US`}
    />
  );
};

export default TeaserLarge1;
