import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import NumbersSection from '../components/numbers-section';
import useProjects from '../hooks/use-projects';
import ProjectPreview from '../components/project-preview';
import ContactForm from '../components/ContactForm';
import TeaserSection from '../components/teaser-section';

export default () => {
  const projects = useProjects();
  return (
    <Layout>
      <Hero />
      <NumbersSection />
      {projects.map(project => (
        <ProjectPreview key={project.slug} project={project} />
      ))}
      <TeaserSection />
      <ContactForm />
    </Layout>
  );
};
