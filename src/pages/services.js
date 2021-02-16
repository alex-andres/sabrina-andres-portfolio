import React from "react";
import ServicesLayout from "../components/services-layout";
import useServices from "../hooks/use-services";

export default () => {
  const servicesData = useServices();
  return <ServicesLayout content={servicesData} />;
};
