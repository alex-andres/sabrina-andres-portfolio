import React, { useContext } from "react";
import Hero from "../components/hero";
import ServicesSection from "../components/ServicesSection";
import TeaserSection1 from "../components/TeaserSection1";
import ProjectSection from "../components/project-section";
import TeaserSection2 from "../components/TeaserSection2";
import InstagramSection from "../components/InstagramSection";
import SEO from "../components/SEO/SEO";
import LoadAnimation from "../components/LoadAnimation";
import { VisitedContext } from "../contexts/VisitedContext";

export default () => {
  const [visited, setVisited] = useContext(VisitedContext);
  if (localStorage.getItem("visited") === "true") {
    setVisited(true);
  }

  if (visited === true) {
    return (
      <>
        <SEO title="Homepage Title" description="test description" />
        <Hero />
        <TeaserSection1 />
        <ServicesSection />
        <ProjectSection />
        <TeaserSection2 />
        <InstagramSection />
      </>
    );
  } else {
    return (
      <>
        <SEO title="Homepage Title" description="test description" />
        <LoadAnimation />
        <Hero />
        <TeaserSection1 />
        <ServicesSection />
        <ProjectSection />
        <TeaserSection2 />
        <InstagramSection />
      </>
    );
  }
};
