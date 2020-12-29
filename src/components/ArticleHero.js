import React from "react";
import { css } from "@emotion/core";

const ArticleHero = (props) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 3fr 2fr;
        margin-bottom: 3rem;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-self: center;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        `}
      >
        {/* <p>{mostRecentPost.tag}</p> */}
        <h1
          css={css`
            margin-bottom: 1.5rem;
          `}
        >
          {this.props.node.title}
        </h1>
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
