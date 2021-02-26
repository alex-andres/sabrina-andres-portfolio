import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { VisitedContext } from "../contexts/VisitedContext";

const Hero = () => {
  const [visited, setVisited] = useContext(VisitedContext);
  // const toggle = React.useCallback(() => {
  //   if (!visited) {
  //     localStorage.setItem("visited", "true");
  //     setVisited(true);
  //   }
  // }, [visited, setVisited]);
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "connor-addison.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  // const onAnimationEnd = () => {
  //   toggle();
  // };

  return (
    <HeroContainer className="hero-container">
      <div className={visited ? "image-wrapper visited" : "image-wrapper"}>
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt="Connor Addison's The Eventual End Painting Mounted, installation setting"
          title="Connor Addison
The Eventual End (Salk Institute), 2020
Oil on linen
194 x 194 cm (76 1/3 x 76 1/3 in)
Courtesy of the artist
Private Collection, Nevada, US"
        />
      </div>
      <div
        className={visited ? "claim-cta-wrapper visited" : "claim-cta-wrapper"}
      >
        <h1 className="hero-h1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1360.25 123.91">
            <text
              transform="translate(0 93.67)"
              fontSize="110"
              fontFamily="LTCBodoni175Pro,'LTC Bodoni 175 Pro'"
            >
              Sabrina Andres Art Advisory
            </text>
          </svg>
        </h1>
        <p className="hero-sub-heading">
          Personalized art consulting with a focus on contemporary art, ranging
          from early career to established international artists.
        </p>
      </div>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "claim" "slider";
  gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-template-areas: "slider claim";
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    gap: 6rem;
    grid-template-areas: "slider slider slider claim claim claim claim";
    grid-template-columns: repeat(7, 1fr);
    max-height: 100%;
  }
  .image-wrapper {
    grid-area: slider;
    width: 100%;
    height: 100%;
    animation-name: rightToLeft;
    animation-duration: 1.5s;
    animation-delay: 9.5s;
    animation-fill-mode: forwards;
    opacity: 0;
    &.visited {
      animation-delay: 0s;
    }
    @keyframes rightToLeft {
      from {
        opacity: 0;
        transform: translateX(-200px);
      }
      to {
        opacity: 1;
        ttransform: translateX(0);
      }
    }
  }
  .claim-cta-wrapper {
    grid-area: claim;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 3rem;
    opacity: 0;
    width: calc(100% - 30px * 2);
    animation-name: leftToRight;
    animation-duration: 1.5s;
    animation-delay: 9.5s;
    animation-fill-mode: forwards;
    &.visited {
      animation-delay: 0s;
    }
    @keyframes leftToRight {
      from {
        opacity: 0;
        transform: translateX(200px);
      }
      to {
        opacity: 1;
        ttransform: translateX(0);
      }
    }
    @media screen and (max-width: 768px) {
      margin: 6rem auto 3rem;
      justify-content: flex-start;
    }
    @media screen and (min-width: 1200px) {
      justify-content: center;
    }
  }
  .hero-h1 {
    position: relative;
    height: 0;
    width: 100%;
    padding: 0;
    padding-bottom: 10%;
    margin-bottom: 2.2rem;
    svg {
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
  .hero-sub-heading {
    margin-bottom: 2rem;
    @media screen and (min-width: 1024px) {
      font-size: 2.2rem;
      margin-bottom: 3rem;
      line-height: 1.75;
    }
  }
`;
