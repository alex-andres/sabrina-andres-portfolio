import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import TeaserLarge from "./TeaserLarge";

const TeaserLarge1 = ({ className }) => {
  const {
    mobileImage,
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
      claimText={"Facilitating investment in passion"}
      className={"teaserLarge1"}
      backgroundTitle={`Alex Becerra
Faces Faces Expansion, 2020
Oil on linen
61 x 45.7 cm (24 x 18 in)
Private Collection, Nevada, US`}
    />
  );
};

export default TeaserLarge1;
