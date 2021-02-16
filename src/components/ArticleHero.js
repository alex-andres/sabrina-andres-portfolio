import React from "react";
import styled from "@emotion/styled";

const ArticleHero = (props) => {
  return (
    <div>
      <div className="article">
        <h1>{this.props.node.title}</h1>
        <p>{this.props.node.publishDate}</p>
        <p>{this.props.node.description.description}</p>
        <Button to={this.props.node.slug}> Read More </Button>
      </div>
      <div>
        <Img
          alt={this.props.node.heroImage.description}
          fluid={this.props.node.heroImage.fluid}
        />
      </div>
    </div>
  );
};

export default ArticleHero;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-bottom: 3rem;
  .article {
    display: flex;
    justify-self: center;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      margin-bottom: 1.5rem;
    }
  }
`;
