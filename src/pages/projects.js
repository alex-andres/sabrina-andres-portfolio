import React from 'react';
import Layout from '../components/layout';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';

export default () => {
  const projects = useProjects();
  return (
    <Layout>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectPreview key={project.slug} project={project} />
      ))}
    </Layout>
  );
};
