import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";

const InstaCard = ({ post }) => {
  const url = `https://www.instagram.com/p/${post.id}`;
  return (
    <div
      css={css`
        width: 280px;
        height: 280px;
        @media screen and (min-width: 350px) {
          width: 300px;
          height: 300px;
        }
      `}
    >
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        css={css`
          position: relative;
          .hoverDiv {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 280px;
            height: 280px;
            @media screen and (min-width: 350px) {
              width: 300px;
              height: 300px;
            }
            z-index: 2;
            width: 100%;
            height: 100%;
            p {
              color: rgba(0, 0, 0, 0);
            }
            background-color: rgba(0, 0, 0, 0);
            transition: background-color 0.4s ease-in;
          }
          &:hover {
            .hoverDiv {
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 280px;
              height: 280px;
              @media screen and (min-width: 350px) {
                width: 300px;
                height: 300px;
              }
              z-index: 1;
              background-color: rgba(0, 0, 0, 0.4);

              p {
                color: white;
                transition: color 0.4s ease-in;
              }
            }
          }
        `}
      >
        <div>
          <div className="hoverDiv">
            <p>View Post on Instagram</p>
          </div>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <Img fixed={post.image} alt={post.caption} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default InstaCard;
