import React from 'react';
import { css } from '@emotion/core';

const NumbersSection = () => {
  return (
    <section
      css={css`
        margin: 121px 0 0 0;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: grid;
          width: 90%;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 50px 100px 100px;
          grid-template-areas:
            'header header'
            'number1 number2'
            'number3 number4';
        `}
      >
        <h2
          css={css`
            grid-area: header;
          `}
        >
          Sabrina's Work by the Numbers
        </h2>
        <p
          css={css`
            grid-area: number1;
          `}
        >
          Managed collections of 10,000 artworks
        </p>
        <p
          css={css`
            grid-area: number2;
          `}
        >
          Managed collections of 10,000 artworks
        </p>
        <p
          css={css`
            grid-area: number3;
          `}
        >
          Managed collections of 10,000 artworks
        </p>
        <p
          css={css`
            grid-area: number4;
          `}
        >
          Managed collections of 10,000 artworks
        </p>
      </div>
    </section>
  );
};

export default NumbersSection;
