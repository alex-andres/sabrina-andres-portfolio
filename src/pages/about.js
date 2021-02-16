import React from "react";
import AboutLayout from "../components/AboutLayout";
import useAbout from "../hooks/use-about";

export default () => {
  const aboutData = useAbout();
  return <AboutLayout content={aboutData} />;
};
