import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";

export default ({ article }) => (
  <Link to={`/blog/${article.slug}`}>
    <div>
      <Image alt={article.description} fluid={article.heroImage.fluid} />
      <h2>{article.title}</h2>
      <p>{article.publishDate}</p>
      <p>{article.description.description}</p>
    </div>
  </Link>
);

const Image = styled(Img)`
  margin-bottom: 1rem;
`;
