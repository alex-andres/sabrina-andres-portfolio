import React from 'react';
import Layout from '../components/layout';
import ServicesLayout from '../components/services-layout';
import useServices from '../hooks/use-services';

export default () => {
  const servicesData = useServices();
  return (
    <Layout>
      <ServicesLayout content={servicesData} />
    </Layout>
  );
};