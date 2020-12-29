import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <div>
      <Img
        css={css`
          margin-bottom: 1rem;
        `}
        alt=""
        fluid={article.heroImage.fluid}
      />
      <h2>{article.title}</h2>
      <p>{article.publishDate}</p>
      <p>{article.description.description}</p>
    </div>
  </Link>
);
