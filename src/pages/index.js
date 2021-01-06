import React from "react";
import Hero from "../components/hero";
import NumbersSection from "../components/numbers-section";
import TeaserSection1 from "../components/TeaserSection1";
import ProjectSection from "../components/project-section";
import TeaserSection2 from "../components/TeaserSection2";
import InstagramSection from "../components/InstagramSection";
import SEO from "../components/SEO/SEO";
import LoadAnimation from "../components/LoadAnimation";

export default () => {
  return (
    <>
      <SEO title="Homepage Title" description="test description" />
      <LoadAnimation />
      <Hero />
      <NumbersSection />
      <TeaserSection1 />
      <ProjectSection />
      <TeaserSection2 />
      <InstagramSection />
    </>
  );
};
