import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Button from "../components/Button";

export default ({ article }) => (
    <Article>
      <Img alt={article.description} fluid={article.heroImage.fluid} />
      <h2>{article.title}</h2>
      <p>{article.description.description}</p>
      <Button className="read-more" to={`/blog/${article.slug}`}> Read More </Button>
    </Article>
);

const Article = styled.article`
  margin-bottom: 3rem;
  * + *{
    margin-top: 1rem;
  }
  h2{
    font-size: 3rem;
    margin-bottom: 1.5rem;
    @media screen and (min-width: 768px){
      margin-bottom: 2rem;
    }
  }
  p{
    margin: 1.5rem 0 2.5rem;
    display: block;
    @media screen and (min-width: 768px){
      display: none;
    }
  }

  .gatsby-image-wrapper{
    margin-bottom: 3rem;
  }
  .read-more{
    margin-top: 2.5rem;
  }
`;
