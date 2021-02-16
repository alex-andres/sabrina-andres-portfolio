import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";

const Teaser = ({ teaser }) => (
  <div
    css={css`
      display: grid;
      grid-template-areas: "background teaser";
      width: 90vw;
      max-width: 1560px;
      margin: 0 auto;
    `}
  >
    <div
      css={css`
        grid-area: background;
      `}
    >
      <Img
        css={css`
          height: 250px;
          width: auto;
        `}
        fluid={teaser.image}
        alt={teaser.alt}
      />
    </div>
    <div
      css={css`
        grid-area: teaser;
        margin-left: 2rem;
      `}
    >
      <h3>{teaser.heading}</h3>
      <p>{teaser.body}</p>
    </div>
  </div>
);

export default Teaser;
