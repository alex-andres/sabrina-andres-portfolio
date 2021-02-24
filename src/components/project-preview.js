import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ProjectPreview = ({ project, variants }) => {
  return (
    <PreviewContainer variants={variants} >
      <BackgroundImage
        tag="article"
        className={`${project.title} background-image`}
        fluid={project.image}
      >
        <Link
        className="link"
          to={`/projects/${project.slug}`}
        >
          <div className="hoverDiv">
            <h2>{project.title}</h2>
          </div>
        </Link>
      </BackgroundImage>
    </PreviewContainer>
  );
};

export default ProjectPreview;

const PreviewContainer = styled.div`
 
  .background-image{
    background-size: cover;
    height: 0;
    padding-top: 75%;
    overflow: hidden;
    position: relative;
    @media screen and (min-width: 800px) {
      padding-top: 100%;
    }
    .link{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;

      .hoverDiv {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 2;
      width: 100%;
      height: 100%;
      h2 {
        color: rgba(255, 255, 255, 1);
      }
      background-color: rgba(0, 0, 0, 0.5);
      @media (hover: hover){
        display: none;
        h2 {
          color: rgba(255, 255, 255, 1);
          opacity: 0;
          transition: opacity 1s ease-in;
        }
        background-color: rgba(0, 0, 0, .5);
        opacity: 0;
        transition: opacity 1s ease-in;
        }
      }  
      &:hover {
        @media(hover: hover){
          .hoverDiv {
          position: absolute;
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
          background-color: rgba(0, 0, 0, .5);
          opacity: 1;
          transition: opacity 1s ease-in;

          h2 {
            opacity: 1;
            color: rgba(255, 255, 255, 1);
            transition: opacity 1s ease-in;
            text-align: center;
            margin: 0;
            }
          }
        }
      }
    }
  }
}
`