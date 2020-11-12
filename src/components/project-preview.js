import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ProjectPreview = ({ project }) => (
  <article>
    <Link to={`/projects/${project.slug}`}>
      <Img
        css={css`
          height: 250px;
        `}
        fluid={project.image}
        alt={project.alt}
      />
      <h2>{project.title}</h2>
      <p>{project.subtitle}</p>
    </Link>
  </article>
);

export default ProjectPreview;
