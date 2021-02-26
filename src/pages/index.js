import React, { useContext, useEffect } from "react";
import {globalHistory} from "@reach/router";
import Hero from "../components/hero";
import ServicesSection from "../components/ServicesSection";
import TeaserSection1 from "../components/TeaserSection1";
import ProjectSection from "../components/project-section";
import TeaserSection2 from "../components/TeaserSection2";
import InstagramSection from "../components/InstagramSection";
import SEO from "../components/SEO";
import LoadAnimation from "../components/LoadAnimation";
import { VisitedContext } from "../contexts/VisitedContext";

export default () => {
  const [visited, setVisited] = useContext(VisitedContext);
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === 'PUSH') setVisited(true)
    })
  }, [setVisited])
  if (visited === true) {
    return (
      <>
        <SEO
          title="Art Advisory in Los Angeles & Zurich - SAAA"
          description="Sabrina Andres offers exceptional art advisory services in Los Angeles with a focus on contemporary art, ranging from early career to blue chip artists."
        />
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
        <SEO
          title="Art Advisory in Los Angeles & Zurich - SAAA"
          description="Sabrina Andres offers exceptional art advisory services in Los Angeles with a focus on contemporary art, ranging from early career to blue chip artists."
        />
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
