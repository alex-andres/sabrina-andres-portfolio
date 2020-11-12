import React from 'react';
import { css } from '@emotion/core'; 
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; 

const ServicesLayout = ({ content }) =>(
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-areas:
        'heading main'
        'heading img';
      grid-gap: 30px;
      @media (max-width: 800px) {
        grid-template-areas: 'heading' 'main' 'img';
        grid-template-columns: 1fr;
        grid-gap: 30px;
      }
    `}
  >
    <div
      className="heading"
      css={css`
        grid-area: heading;
      `}
    >
      <h1>{content.heading}</h1>
      <div css={css`
        margin-top: 1rem;
      `}>
      {documentToReactComponents(content.description)}
      </div>
    </div>
    <div
      className="main"
      css={css`
        grid-area: main;
        margin-bottom: 3rem;
      `}
    >
      {documentToReactComponents(content.services)}
    </div>
    <div
      css={css`
        grid-area: img;
      `}
    >
      <Img
        css={css`
          margin-bottom: 1rem;
        `}
        fluid={content.image}
        alt={content.alt}
      />
    </div>
  </div>
);

export default ServicesLayout;