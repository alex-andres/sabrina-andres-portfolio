import React from "react";
import { css } from "@emotion/core";

export default () => {
  return (
    <div
      css={css`
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 50vw;
        `}
      >
        <svg
          css={css`
            overflow: visible;
          `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 369.38 218.51"
        >
          <path d="M13.16,206.69c0-3.77-3.69-4.49-7.08-5.66-2.85-1-5.49-2.31-5.49-6,0-3.15,2-5.85,5.31-5.85a7.24,7.24,0,0,1,3.87,1.08c.6.39.75.48,1,.48.63,0,1.05-.45,1.14-1.23h.48l.21,6.3h-.51a9.5,9.5,0,0,0-1.53-3.87A5.66,5.66,0,0,0,6,189.69c-2,0-4.2,1.17-4.2,3.39,0,3.26,3.4,3.9,6.69,4.95,3.09,1,6.09,2.3,6.09,6.45,0,3.89-2.49,6.71-6.48,6.71a7.21,7.21,0,0,1-3.6-.9l-1.47-.8a1.69,1.69,0,0,0-.9-.28c-.6,0-.89.39-1.14,1.47H.59l0-7.41H1c.51,2.61.78,3.42,1.59,4.65a7.08,7.08,0,0,0,5.58,2.83C10.52,210.75,13.16,209.36,13.16,206.69Z" />
          <path d="M29.75,211a4.31,4.31,0,0,1-1,.09c-1.56,0-2.46-.54-3.78-2.21-1.86,1.85-2.64,2.25-4.2,2.25-2.43,0-4.23-1.59-4.23-3.75,0-1.83,1.11-2.94,3.45-3.42l2.91-.58a8.42,8.42,0,0,0,1.83-.5v-2.76c0-1.44-1.08-2.28-3-2.28-1.47,0-2.52.54-2.52,1.29s.63,1.14.63,1.83a1.38,1.38,0,1,1-2.73-.33c0-1.92,2.13-3.36,5-3.36,3,0,5.25,1.83,5.25,4.35v6.56c0,1.78.51,2.31,2.34,2.37Zm-8.43-6.78c-1.62.33-2.19,1.2-2.19,3.31,0,1.79.87,2.94,2.22,2.94a3.76,3.76,0,0,0,3.39-3.58v-3.51C22.82,203.84,22.16,204,21.32,204.17Z" />
          <path d="M31.49,210.66v-.49h2.16V190.05H31.46v-.48h4.8v10.71c1.47-2.28,2.52-3,4.26-3,3.06,0,5.76,3.35,5.76,7.1s-2.7,6.73-5.85,6.73c-2,0-3.09-.91-4.08-3.46v3Zm11.94-6.91c0-4.1-.93-6-3-6-2.58,0-4.08,2.21-4.08,6,0,4.2,1.5,6.83,3.87,6.83C43.1,210.62,43.43,207.26,43.43,203.75Z" />
          <path d="M47.9,210.66v-.49h2.19v-12H47.84v-.48h4.74v2.85c.75-2.32,2-3.33,3.33-3.33a2.31,2.31,0,0,1,2.37,2.28c0,1-.51,1.64-1.29,1.64a1.16,1.16,0,0,1-1.2-1.13c0-.42.21-.84.21-1.38a.63.63,0,0,0-.72-.69,1.78,1.78,0,0,0-1.14.6,8,8,0,0,0-1.44,4.55v7h2.4v.49Z" />
          <path d="M59.75,210.66l0-.49h2.13V198.26h-2v-.51h4.59v12.42h2.07v.49Zm1.56-19.33a1.77,1.77,0,0,1,1.77-1.76,1.72,1.72,0,0,1,1.77,1.68,1.78,1.78,0,0,1-1.68,1.86A1.82,1.82,0,0,1,61.31,191.33Z" />
          <path d="M76.43,210.17h2.19v-9.53c0-1.89-.69-2.89-2-2.89-2.19,0-3.93,2.29-3.93,5.23v7.19H75v.49H68v-.49H70.1v-12H68v-.48h4.71v2.34c1.32-2,2.61-2.88,4.47-2.88a4,4,0,0,1,4.08,4v9h2.16v.49h-7Z" />
          <path d="M98.12,211a4.31,4.31,0,0,1-1,.09c-1.56,0-2.46-.54-3.78-2.21-1.86,1.85-2.64,2.25-4.2,2.25-2.43,0-4.23-1.59-4.23-3.75,0-1.83,1.11-2.94,3.45-3.42l2.91-.58a8.42,8.42,0,0,0,1.83-.5v-2.76c0-1.44-1.08-2.28-3-2.28-1.47,0-2.52.54-2.52,1.29s.63,1.14.63,1.83a1.38,1.38,0,1,1-2.73-.33c0-1.92,2.13-3.36,5-3.36,3,0,5.25,1.83,5.25,4.35v6.56c0,1.78.51,2.31,2.34,2.37Zm-8.43-6.78c-1.62.33-2.19,1.2-2.19,3.31,0,1.79.87,2.94,2.22,2.94a3.76,3.76,0,0,0,3.39-3.58v-3.51C91.19,203.84,90.53,204,89.69,204.17Z" />
          <path d="M115.55,189.3l.51-.12,8.34,21h2.67v.49H118v-.49h2.88l-2.61-6.71h-6.09l-1.92,6.71h2.91v.49h-6.39v-.49h2.76Zm-3.21,13.44h5.58l-3.27-8.34Z" />
          <path d="M136.37,210.17h2.19v-9.53c0-1.89-.69-2.89-2-2.89-2.19,0-3.93,2.29-3.93,5.23v7.19h2.28v.49h-7v-.49H130v-12h-2.13v-.48h4.71v2.34c1.32-2,2.61-2.88,4.47-2.88a4,4,0,0,1,4.08,4v9h2.16v.49h-7Z" />
          <path d="M154.73,210.66V208.1c-1.29,2.16-2.4,3-4,3-3,0-5.73-3.3-5.73-6.86,0-3.78,2.49-6.93,5.49-6.93,1.71,0,2.67.53,4.29,2.27v-9.53h-2.25v-.48h4.86v20.6h2.4v.49Zm.21-6.82c0-3.47-1.65-6-3.9-6s-3.12,2-3.12,6.6c0,4.08,1.05,6.09,3.18,6.09S154.94,207.75,154.94,203.84Z" />
          <path d="M161,210.66v-.49h2.19v-12H161v-.48h4.74v2.85c.75-2.32,2-3.33,3.33-3.33a2.31,2.31,0,0,1,2.37,2.28c0,1-.51,1.64-1.29,1.64a1.16,1.16,0,0,1-1.2-1.13c0-.42.21-.84.21-1.38a.63.63,0,0,0-.72-.69,1.78,1.78,0,0,0-1.14.6,8,8,0,0,0-1.44,4.55v7h2.4v.49Z" />
          <path d="M175.55,203.46c0,.56,0,1.11,0,1.55,0,3.7,1.23,5.58,3.72,5.58s3.84-1.32,4.38-4h.51c-.51,2.84-2.19,4.52-5,4.52a6.49,6.49,0,0,1-6.33-6.81c0-3.78,2.7-7,5.85-7s5.49,2.79,5.49,6.21Zm2.91-5.73c-2,0-2.94,1.7-2.94,5.27h5.82C181.34,199,180.68,197.73,178.46,197.73Z" />
          <path d="M186.29,210.62c.06-.84.06-1.59.06-2.34s0-1.7-.12-2.66h.39c.87,3.47,2.4,5,5,5,1.74,0,2.94-.9,2.94-2.25,0-1.55-.87-2.09-4.14-3.21-2.94-1-4.2-2.24-4.2-4.13a3.7,3.7,0,0,1,3.63-3.78,6.36,6.36,0,0,1,3.39,1.23,1.4,1.4,0,0,0,.3.12c.27,0,.54-.42.66-1.06l.36,0c0,1.47,0,2.91.12,4.43h-.51c-.63-2.63-2.22-4.22-4.23-4.22-1.44,0-2.7,1-2.7,2.13s.75,1.74,3.72,2.69c3.57,1.15,4.83,2.31,4.83,4.41a4.13,4.13,0,0,1-4.26,4.17,5.73,5.73,0,0,1-3.15-1,2.46,2.46,0,0,0-.93-.47c-.39,0-.69.44-.72,1Z" />
          <path d="M213.23,189.3l.51-.12,8.34,21h2.67v.49h-9.12v-.49h2.88l-2.61-6.71h-6.09l-1.92,6.71h2.91v.49h-6.39v-.49h2.76ZM210,202.74h5.58l-3.27-8.34Z" />
          <path d="M225.53,210.66v-.49h2.19v-12h-2.25v-.48h4.74v2.85c.75-2.32,2-3.33,3.33-3.33a2.31,2.31,0,0,1,2.37,2.28c0,1-.51,1.64-1.29,1.64a1.16,1.16,0,0,1-1.2-1.13c0-.42.21-.84.21-1.38a.63.63,0,0,0-.72-.69,1.78,1.78,0,0,0-1.14.6,8,8,0,0,0-1.44,4.55v7h2.4v.49Z" />
          <path d="M247.58,205.74c0,3.68-1.14,5.36-3.66,5.36s-3.81-1.68-3.81-4.52v-8.34h-2.76v-.49h2.76v-3.92a9.4,9.4,0,0,0,2.49-1.17l.18.06v5h3.36v.49h-3.36V208.5c0,1.22.6,1.88,1.68,1.88,1.8,0,2.61-1.38,2.7-4.64Z" />
          <path d="M264.83,189.3l.51-.12,8.34,21h2.67v.49h-9.12v-.49h2.88l-2.61-6.71h-6.09l-1.92,6.71h2.91v.49H256v-.49h2.76Zm-3.21,13.44h5.58l-3.27-8.34Z" />
          <path d="M286.28,210.66V208.1c-1.29,2.16-2.4,3-4,3-3,0-5.73-3.3-5.73-6.86,0-3.78,2.49-6.93,5.49-6.93,1.71,0,2.67.53,4.29,2.27v-9.53h-2.25v-.48H289v20.6h2.4v.49Zm.21-6.82c0-3.47-1.65-6-3.9-6s-3.12,2-3.12,6.6c0,4.08,1,6.09,3.18,6.09S286.49,207.75,286.49,203.84Z" />
          <path d="M306.32,198.24h-2.43L299.27,211l-.51.11-5-12.86h-2.31v-.49h4.71l3.84,9.42,3.21-8.93h-2.28v-.49h5.43Z" />
          <path d="M308.09,210.66l0-.49h2.13V198.26h-2v-.51h4.59v12.42h2.07v.49Zm1.56-19.33a1.77,1.77,0,0,1,1.77-1.76,1.72,1.72,0,0,1,1.77,1.68,1.78,1.78,0,0,1-1.68,1.86A1.82,1.82,0,0,1,309.65,191.33Z" />
          <path d="M316.94,210.62c.06-.84.06-1.59.06-2.34s0-1.7-.12-2.66h.39c.87,3.47,2.4,5,5,5,1.74,0,2.94-.9,2.94-2.25,0-1.55-.87-2.09-4.14-3.21-2.94-1-4.2-2.24-4.2-4.13a3.7,3.7,0,0,1,3.63-3.78,6.36,6.36,0,0,1,3.39,1.23,1.4,1.4,0,0,0,.3.12c.27,0,.54-.42.66-1.06l.36,0c0,1.47,0,2.91.12,4.43h-.51c-.63-2.63-2.22-4.22-4.23-4.22-1.44,0-2.7,1-2.7,2.13s.75,1.74,3.72,2.69c3.57,1.15,4.83,2.31,4.83,4.41a4.13,4.13,0,0,1-4.26,4.17,5.73,5.73,0,0,1-3.15-1,2.46,2.46,0,0,0-.93-.47c-.39,0-.69.44-.72,1Z" />
          <path d="M341.42,204.24a6.58,6.58,0,1,1-6.57-7A6.92,6.92,0,0,1,341.42,204.24Zm-2.79,0c0-4.59-1.17-6.51-3.78-6.51s-3.78,1.92-3.78,6.51c0,4.31,1.05,6.35,3.78,6.35S338.63,208.55,338.63,204.24Z" />
          <path d="M342.92,210.66v-.49h2.19v-12h-2.25v-.48h4.74v2.85c.75-2.32,2-3.33,3.33-3.33a2.31,2.31,0,0,1,2.37,2.28c0,1-.51,1.64-1.29,1.64a1.16,1.16,0,0,1-1.2-1.13c0-.42.21-.84.21-1.38a.63.63,0,0,0-.72-.69,1.78,1.78,0,0,0-1.14.6,8,8,0,0,0-1.44,4.55v7h2.4v.49Z" />
          <path d="M369.23,198.24H367l-4.86,17.21c-.51,1.86-1.8,3.06-3.3,3.06a2.9,2.9,0,0,1-2.82-2.7,1.44,1.44,0,0,1,1.35-1.5,1.36,1.36,0,0,1,1.26,1.27c0,.56-.33,1-.33,1.64a.62.62,0,0,0,.6.7c1.83,0,2.4-1,4-7.06l-6.21-12.62h-2.46v-.49h5.07l4.59,9.42,2.49-8.93h-2.31v-.49h5.16Z" />
          <line
            x1="0.88"
            y1="177.34"
            x2="368.88"
            y2="177.34"
            style={{ fill: "none", stroke: "#000" }}
          />
          <path
            d="M227.71,161.16a50.33,50.33,0,0,1-11.2,1.05c-18.2,0-28.7-6.3-44.1-25.9-21.7,21.7-30.81,26.25-49,26.25-28.35,0-49.35-18.55-49.35-43.75,0-21.35,13-34.3,40.25-39.9l34-6.66c10.86-2.1,13-2.8,21.36-6V34.1c0-16.8-12.61-26.6-35-26.6-17.15,0-29.4,6.3-29.4,15.05,0,7.7,7.35,13.3,7.35,21.35,0,7.7-8.4,14.7-16.45,14.7-8.75,0-15.4-7.7-15.4-18.55,0-22.4,24.85-39.2,58.45-39.2,35.36,0,61.26,21.35,61.26,50.75v76.66c0,20.65,6,27,27.3,27.65ZM129.35,82.05c-18.9,3.86-25.55,14-25.55,38.51,0,21,10.15,34.3,25.9,34.3,20,0,39.56-21,39.56-41.65v-41C146.86,78.2,139.15,80,129.35,82.05Z"
            style={{ stroke: "#000", strokeMiterLimit: "10" }}
          />
          <path
            d="M296.55,161.16a50.33,50.33,0,0,1-11.2,1.05c-18.21,0-28.71-6.3-44.11-25.9-21.7,21.7-30.8,26.25-49,26.25-28.35,0-49.35-18.55-49.35-43.75,0-21.35,13-34.3,40.25-39.9l34-6.66c10.85-2.1,12.95-2.8,21.35-6V34.1c0-16.8-12.6-26.6-35-26.6-17.15,0-29.4,6.3-29.4,15.05,0,7.7,7.35,13.3,7.35,21.35,0,7.7-8.4,14.7-16.45,14.7-8.75,0-15.4-7.7-15.4-18.55,0-22.4,24.85-39.2,58.45-39.2,35.35,0,61.26,21.35,61.26,50.75v76.66c0,20.65,5.95,27,27.3,27.65ZM198.19,82.05c-18.9,3.86-25.55,14-25.55,38.51,0,21,10.15,34.3,25.9,34.3,20,0,39.55-21,39.55-41.65v-41C215.69,78.2,208,80,198.19,82.05Z"
            style={{ stroke: "#fff", strokeMiterLimit: "10" }}
          />
          <path
            d="M368.88,161.16a50.33,50.33,0,0,1-11.2,1.05c-18.2,0-28.7-6.3-44.1-25.9-21.7,21.7-30.8,26.25-49,26.25-28.35,0-49.36-18.55-49.36-43.75,0-21.35,13-34.3,40.26-39.9l34-6.66c10.85-2.1,12.95-2.8,21.35-6V34.1c0-16.8-12.6-26.6-35-26.6-17.15,0-29.4,6.3-29.4,15.05,0,7.7,7.35,13.3,7.35,21.35,0,7.7-8.4,14.7-16.45,14.7-8.75,0-15.41-7.7-15.41-18.55,0-22.4,24.86-39.2,58.46-39.2,35.35,0,61.25,21.35,61.25,50.75v76.66c0,20.65,5.95,27,27.3,27.65ZM270.53,82.05c-18.9,3.86-25.55,14-25.55,38.51,0,21,10.15,34.3,25.9,34.3,19.95,0,39.55-21,39.55-41.65v-41C288,78.2,280.33,80,270.53,82.05Z"
            style={{ fill: "#fff", stroke: "#000", strokeMiterLimit: 10 }}
          />
          <path
            d="M1.25,157c.7-9.8.7-18.55.7-27.3,0-10.15-.35-20-1.4-31.15H5.1c10.15,40.6,28,58.1,58.8,58.1,20.31,0,34.31-10.5,34.31-26.25,0-18.2-10.15-24.5-48.31-37.45C15.6,81.36.9,66.65.9,44.6.9,20.1,19.8.5,43.25.5c11.9,0,25.2,4.9,39.55,14.35a11.93,11.93,0,0,0,3.5,1.4c3.16,0,6.31-4.9,7.7-12.25l4.21-.35c0,17.15,0,34,1.4,51.8h-6C86.3,24.65,67.75,6.1,44.3,6.1,27.5,6.1,12.8,17.65,12.8,31c0,11.9,8.75,20.3,43.4,31.5,41.66,13.3,56.36,27,56.36,51.46,0,27.65-21.35,48.65-49.71,48.65-12.25,0-25.55-4.55-36.75-12.25-6-3.85-9.1-5.6-10.85-5.6-4.55,0-8,5.25-8.4,12.25Z"
            style={{ fill: "#fff", stroke: "#000", strokeMiterLimit: 10 }}
          />
        </svg>
      </div>
      <p
        css={css`
          font-family: Bodoni;
          font-weight: 500;
          font-size: 2rem;
          @media screen and (min-width: 1024px) {
            font-size: 4rem;
          }
        `}
      >
        Coming Soon
      </p>
    </div>
  );
};
