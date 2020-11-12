import React from 'react';
import { css } from '@emotion/core';
import Img from 'gatsby-image';

const Teaser = ({ teaser }) => (
  <div
    css={css`
      display: grid;
      grid-template-areas: 'background teaser';
    `}
  >
    <div
      css={css`
        grid-area: background;
        background: url();
      `}
    >
      <Img
        css={css`
          height: 250px;
        `}
        fluid={teaser.image}
        alt={teaser.alt}
      />
    </div>
    <div
      css={css`
        grid-area: teaser;
      `}
    >
      <h3>{teaser.heading}</h3>
      <p>{teaser.body}</p>
    </div>
  </div>
);

export default Teaser;
