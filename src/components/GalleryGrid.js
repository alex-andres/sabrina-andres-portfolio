import React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";

class GalleryGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.cellRef = React.createRef();
  }
  componentDidMount() {
    this.cellRef.current.imageRef.current.addEventListener(
      "load",
      this.setSpans
    );
    console.log(this.cellRef);
  }
  setSpans = () => {
    const height = this.cellRef.current.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, fluid } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <Img
          ref={this.cellRef}
          fluid={fluid}
          alt={description}
          css={css`
            width: 250px;
          `}
        />
      </div>
    );
  }
}

export default GalleryGrid;
