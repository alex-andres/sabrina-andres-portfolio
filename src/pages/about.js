import React from 'react';
import Layout from '../components/layout';
import TwoColumnLayout from '../components/two-column-layout';
import useAbout from '../hooks/use-about';


export default () => {
  const aboutData = useAbout();
  return (
    <Layout>
      <TwoColumnLayout content={aboutData} />
    </Layout>
  );
};

