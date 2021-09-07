import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Lightbox from './Lightbox';

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
        <Lightbox>
          <Image ref={this.cellRef} fluid={fluid} alt={description} />
        </Lightbox>
      </div>
    );
  }
}

export default GalleryGrid;

const Image = styled(Img)`
  min-width: 250px;
  width: 100%;
`;
