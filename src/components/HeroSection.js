import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { VisitedContext } from "../contexts/VisitedContext";

const Hero = () => {
  const [visited] = useContext(VisitedContext);
  // const toggle = React.useCallback(() => {
  //   if (!visited) {
  //     localStorage.setItem("visited", "true");
  //     setVisited(true);
  //   }
  // }, [visited, setVisited]);
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "andre-butzer.jpg" }) {
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
          alt="André Butzer's Untitled Painting Mounted, installation setting"
          title="André Butzer
Untitled, 2021
Acrylic on canvas
80 × 63 cm (31.4 × 24.8 in)
Courtesy of the artist and Galería Mascota
Photo taken by Bruno Ruiz Nava
Private collection, Oregon, US"
        />
      </div>
      <div
        className={visited ? "claim-cta-wrapper visited" : "claim-cta-wrapper"}
      >
        <h1 className="hero-h1">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 147.4634 11.7295"
          >
            <path
              d="M6581.0542,6980.9009c0-1.5113-1.4751-1.7993-2.8306-2.2671-1.1391-.3955-2.1948-.9234-2.1948-2.3984a2.1659,2.1659,0,0,1,2.1231-2.3389,2.897,2.897,0,0,1,1.5473.4316c.24.1563.3.1924.4077.1924.2515,0,.4195-.18.4556-.4922h.1919l.084,2.5191h-.2041a3.7949,3.7949,0,0,0-.6114-1.5474,2.2617,2.2617,0,0,0-1.8232-.8994,1.5292,1.5292,0,0,0-1.6792,1.355c0,1.3076,1.3555,1.559,2.6748,1.979,1.2354.3838,2.4346.9238,2.4346,2.5786a2.5,2.5,0,0,1-2.59,2.6865,2.8772,2.8772,0,0,1-1.44-.36l-.5874-.3237a.73.73,0,0,0-.36-.1079c-.24,0-.36.1558-.456.5879h-.168l-.0117-2.9624h.168a4.3133,4.3133,0,0,0,.6352,1.8589,2.84,2.84,0,0,0,2.231,1.1274A1.8176,1.8176,0,0,0,6581.0542,6980.9009Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6587.69,6982.604a1.7795,1.7795,0,0,1-1.895-.8516c-.7431.7437-1.0552.8995-1.6787.8995a1.5589,1.5589,0,0,1-1.6914-1.4991c0-.7319.4439-1.1757,1.3794-1.3676l1.1636-.2276a3.3763,3.3763,0,0,0,.7314-.2041V6978.25c0-.5757-.4316-.9111-1.1992-.9111-.5879,0-1.0078.2158-1.0078.5156,0,.2637.2519.4556.2519.7314a.55.55,0,1,1-1.0913-.1318c0-.7676.8516-1.3433,2.003-1.3433a1.8827,1.8827,0,0,1,2.0991,1.7393v2.6265c0,.7075.2036.9233.935.9472Zm-3.37-2.71c-.6474.1318-.8755.4794-.8755,1.3188,0,.72.3482,1.1753.8877,1.1753a1.497,1.497,0,0,0,1.355-1.4268v-1.4033C6584.9194,6979.7612,6584.6558,6979.8213,6584.32,6979.8936Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6588.3892,6982.4839v-.1919h.8632v-8.0474h-.8754v-.1919h1.9189v4.2813c.5879-.9111,1.0073-1.211,1.7031-1.211a2.6988,2.6988,0,0,1,2.3028,2.8423,2.5745,2.5745,0,0,1-2.3389,2.6866c-.7915,0-1.2354-.36-1.6309-1.3794v1.2114Zm4.7734-2.7583c0-1.6431-.3721-2.3867-1.2-2.3867-1.0313,0-1.6309.8872-1.6309,2.3984,0,1.6792.6,2.7344,1.5469,2.7344C6593.03,6982.4717,6593.1626,6981.1284,6593.1626,6979.7256Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6594.9536,6982.4839v-.1919h.8755v-4.7852h-.8994v-.1919h1.8945v1.1392c.3-.9233.8037-1.3311,1.3316-1.3311a.9267.9267,0,0,1,.9472.9112c0,.396-.2036.66-.5156.66a.4685.4685,0,0,1-.48-.4555c0-.168.084-.336.084-.5518a.2512.2512,0,0,0-.2881-.2759.7132.7132,0,0,0-.4556.24,3.228,3.228,0,0,0-.5756,1.8232v2.8184h.9594v.1919Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6599.6929,6982.4839l.0122-.1919h.8515v-4.7612h-.792v-.2041h1.835v4.9653h.8276v.1919Zm.6235-7.7236a.7091.7091,0,0,1,.708-.7076.6867.6867,0,0,1,.7075.6714.7118.7118,0,0,1-.6718.7437A.7252.7252,0,0,1,6600.3164,6974.76Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6606.3633,6982.292h.876v-3.814c0-.7553-.2759-1.1513-.8038-1.1513-.8754,0-1.5712.9116-1.5712,2.0869v2.8784h.9116v.1919h-2.7945v-.1919h.8516v-4.7852h-.8516v-.1919h1.8829v.9351a2.0145,2.0145,0,0,1,1.7871-1.1514,1.59,1.59,0,0,1,1.6308,1.6075v3.5859h.8638v.1919h-2.7827Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6615.0381,6982.604a1.7787,1.7787,0,0,1-1.8945-.8516c-.7437.7437-1.0557.8995-1.6792.8995a1.559,1.559,0,0,1-1.6915-1.4991c0-.7319.4439-1.1757,1.3794-1.3676l1.1636-.2276a3.3691,3.3691,0,0,0,.7315-.2041V6978.25c0-.5757-.4317-.9111-1.1993-.9111-.5878,0-1.0073.2158-1.0073.5156,0,.2637.2515.4556.2515.7314a.55.55,0,1,1-1.0913-.1318c0-.7676.8515-1.3433,2.0029-1.3433a1.8822,1.8822,0,0,1,2.0986,1.7393v2.6265c0,.7075.2041.9233.9356.9472Zm-3.37-2.71c-.6475.1318-.8755.4794-.8755,1.3188,0,.72.3481,1.1753.8877,1.1753a1.497,1.497,0,0,0,1.355-1.4268v-1.4033C6612.2676,6979.7612,6612.0039,6979.8213,6611.668,6979.8936Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6622.0112,6973.9443l.2041-.0478,3.334,8.3955h1.0674v.1919h-3.646v-.1919h1.1514l-1.0435-2.6865h-2.4346l-.7675,2.6865h1.1635v.1919h-2.5546v-.1919h1.1035Zm-1.2832,5.3731h2.231l-1.3076-3.334Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6630.3389,6982.292h.8759v-3.814c0-.7553-.2758-1.1513-.8037-1.1513-.8755,0-1.5713.9116-1.5713,2.0869v2.8784h.9117v.1919h-2.7945v-.1919h.8516v-4.7852h-.8516v-.1919h1.8828v.9351a2.0147,2.0147,0,0,1,1.7872-1.1514,1.59,1.59,0,0,1,1.6308,1.6075v3.5859h.8638v.1919h-2.7827Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6637.6826,6982.4839v-1.02c-.5156.8637-.9595,1.1992-1.583,1.1992a2.6684,2.6684,0,0,1-2.291-2.7461,2.5551,2.5551,0,0,1,2.1948-2.77,2.0891,2.0891,0,0,1,1.7154.9111v-3.8135h-.9v-.1919h1.9434v8.2393h.9595v.1919Zm.084-2.7227c0-1.3911-.66-2.3984-1.5591-2.3984-.8637,0-1.2475.7915-1.2475,2.6387,0,1.6308.42,2.4345,1.2714,2.4345C6637.1309,6982.436,6637.7666,6981.32,6637.7666,6979.7612Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6640.2051,6982.4839v-.1919h.8755v-4.7852h-.8994v-.1919h1.8945v1.1392c.3-.9233.8037-1.3311,1.3315-1.3311a.9267.9267,0,0,1,.9473.9112c0,.396-.2036.66-.5156.66a.4685.4685,0,0,1-.4795-.4555c0-.168.084-.336.084-.5518a.2512.2512,0,0,0-.2881-.2759.7128.7128,0,0,0-.4556.24,3.228,3.228,0,0,0-.5757,1.8232v2.8184h.9595v.1919Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6646.0122,6979.6055c-.0122.228-.0122.4438-.0122.6235,0,1.4751.4917,2.231,1.4873,2.231a1.6981,1.6981,0,0,0,1.751-1.6075h.2036a1.9331,1.9331,0,0,1-2.0024,1.8111,2.5933,2.5933,0,0,1-2.5308-2.7222,2.665,2.665,0,0,1,2.3384-2.8184,2.3549,2.3549,0,0,1,2.1948,2.4825Zm1.1631-2.2906c-.7915,0-1.1753.6836-1.1753,2.1109h2.3267C6648.3267,6977.8066,6648.063,6977.3149,6647.1753,6977.3149Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6650.3086,6982.4717c.0239-.3355.0239-.6353.0239-.9351,0-.3481-.0122-.6841-.0483-1.0678h.1562c.3477,1.3916.9595,1.9912,2.0147,1.9912.6958,0,1.1753-.36,1.1753-.9,0-.624-.3477-.84-1.6548-1.2832-1.1753-.396-1.6792-.9-1.6792-1.6552a1.4774,1.4774,0,0,1,1.4512-1.5113,2.5422,2.5422,0,0,1,1.3554.4917.4026.4026,0,0,0,.12.0479c.1079,0,.2158-.168.2641-.4194l.1436-.0122c0,.5878,0,1.1635.0483,1.7749h-.2041c-.2519-1.0552-.8877-1.691-1.6909-1.691a1.0108,1.0108,0,0,0-1.08.8516c0,.4077.3.6958,1.4873,1.08,1.4273.4556,1.9307.9233,1.9307,1.7627a1.6494,1.6494,0,0,1-1.7027,1.667,2.2918,2.2918,0,0,1-1.2592-.4195,1.0253,1.0253,0,0,0-.3721-.1919c-.1558,0-.2759.18-.2876.4195Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6661.0825,6973.9443l.2041-.0478,3.334,8.3955h1.0674v.1919h-3.646v-.1919h1.1514l-1.0435-2.6865h-2.4346l-.7675,2.6865h1.1635v.1919h-2.5547v-.1919h1.1036Zm-1.2832,5.3731h2.231l-1.3076-3.334Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6666.0044,6982.4839v-.1919h.8755v-4.7852h-.8994v-.1919h1.8945v1.1392c.3-.9233.8037-1.3311,1.3315-1.3311a.9267.9267,0,0,1,.9473.9112c0,.396-.2036.66-.5156.66a.4685.4685,0,0,1-.48-.4555c0-.168.084-.336.084-.5518a.2512.2512,0,0,0-.2881-.2759.7132.7132,0,0,0-.4556.24,3.228,3.228,0,0,0-.5757,1.8232v2.8184h.9595v.1919Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6674.8218,6980.5171c0,1.4751-.4556,2.1465-1.4629,2.1465-.9595,0-1.5235-.6714-1.5235-1.8111v-3.3339h-1.103v-.1919h1.103v-1.5713a3.7517,3.7517,0,0,0,.9957-.4673l.0717.0239v2.0147h1.3433v.1919h-1.3433v4.1015c0,.4922.24.7559.6719.7559.72,0,1.0435-.5518,1.0791-1.8589Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6681.7222,6973.9443l.2041-.0478,3.334,8.3955h1.0673v.1919h-3.646v-.1919h1.1514l-1.0434-2.6865h-2.4346l-.7676,2.6865h1.1636v.1919h-2.5547v-.1919H6679.3Zm-1.2832,5.3731h2.2309l-1.3076-3.334Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6690.3018,6982.4839v-1.02c-.5157.8637-.9595,1.1992-1.583,1.1992a2.6684,2.6684,0,0,1-2.2911-2.7461,2.5551,2.5551,0,0,1,2.1949-2.77,2.0889,2.0889,0,0,1,1.7153.9111v-3.8135h-.9v-.1919h1.9433v8.2393h.9595v.1919Zm.0839-2.7227c0-1.3911-.66-2.3984-1.559-2.3984-.8638,0-1.2476.7915-1.2476,2.6387,0,1.6308.42,2.4345,1.2715,2.4345C6689.75,6982.436,6690.3857,6981.32,6690.3857,6979.7612Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6698.3169,6977.5186h-.9717l-1.8467,5.0971-.2041.0479-2.0146-5.145h-.9238v-.1919h1.8833l1.5351,3.7661,1.2832-3.5742h-.9116v-.1919h2.1709Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6699.0278,6982.4839l.0122-.1919h.8516v-4.7612h-.792v-.2041h1.835v4.9653h.8276v.1919Zm.6236-7.7236a.7091.7091,0,0,1,.708-.7076.6867.6867,0,0,1,.7075.6714.7118.7118,0,0,1-.6719.7437A.7252.7252,0,0,1,6699.6514,6974.76Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6702.5679,6982.4717c.0239-.3355.0239-.6353.0239-.9351,0-.3481-.0122-.6841-.0479-1.0678h.1558c.3477,1.3916.9595,1.9912,2.0147,1.9912.6958,0,1.1752-.36,1.1752-.9,0-.624-.3476-.84-1.6547-1.2832-1.1753-.396-1.6792-.9-1.6792-1.6552a1.4773,1.4773,0,0,1,1.4511-1.5113,2.5422,2.5422,0,0,1,1.3555.4917.4032.4032,0,0,0,.12.0479c.1079,0,.2159-.168.2642-.4194l.1435-.0122c0,.5878,0,1.1635.0484,1.7749h-.2041c-.252-1.0552-.8872-1.691-1.6909-1.691a1.0108,1.0108,0,0,0-1.08.8516c0,.4077.3.6958,1.4873,1.08,1.4272.4556,1.9311.9233,1.9311,1.7627a1.65,1.65,0,0,1-1.7031,1.667,2.2924,2.2924,0,0,1-1.2593-.4195,1.0252,1.0252,0,0,0-.372-.1919c-.1558,0-.2759.18-.2876.4195Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M 6712.3569 6979.9175 a 2.6317 2.6317 0 1 1 -2.6264 -2.7945 A 2.7618 2.7618 0 0 1 6712.3569 6979.9175 Z m -1.1157 0 c 0 -1.835 -0.4673 -2.6026 -1.5107 -2.6026 s -1.5113 0.7676 -1.5113 2.6026 c 0 1.727 0.3398 2.2445 1.5038 2.2555 S 6711.2412 6981.6445 6711.2412 6979.9175 Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6712.96,6982.4839v-.1919h.8754v-4.7852h-.8994v-.1919h1.8946v1.1392c.3-.9233.8037-1.3311,1.3315-1.3311a.9268.9268,0,0,1,.9473.9112c0,.396-.2036.66-.5156.66a.4685.4685,0,0,1-.4795-.4555c0-.168.0839-.336.0839-.5518a.2511.2511,0,0,0-.288-.2759.7128.7128,0,0,0-.4556.24,3.228,3.228,0,0,0-.5757,1.8232v2.8184h.9595v.1919Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <path
              d="M6723.4805,6977.5186h-.8755l-1.9434,6.8842a1.4683,1.4683,0,0,1-1.3188,1.2232,1.1591,1.1591,0,0,1-1.1275-1.0791.5755.5755,0,0,1,.54-.6.5414.5414,0,0,1,.5039.5034c0,.228-.1323.42-.1323.66a.2442.2442,0,0,0,.24.2758c.7314,0,.96-.3955,1.583-2.8183l-2.4829-5.0493h-.9834v-.1919h2.0269l1.8354,3.7661.9951-3.5742h-.9233v-.1919h2.063Z"
              transform="translate(-6576.0171 -6973.8965)"
            />
            <span className="visually-hidden">Sabrina Andres Art Advisory</span>
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
    ${'' /* gap: 6rem; */}
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
    @media screen and (min-width: 1024px){
      margin: 2rem 3vw 3rem;
      width: calc(100% - 3vw * 2);
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
    @media screen and (min-width: 400px){
      margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 1024px){
      margin-bottom: .5rem;
    }
    .visually-hidden {
      border: 0;
      padding: 0;
      margin: 0;
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px);
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
  .hero-sub-heading {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    @media screen and (min-width: 768px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 1024px) {
      font-size: 2.2rem;
      margin-bottom: 3rem;
      line-height: 1.75;
    }
  }
`;
