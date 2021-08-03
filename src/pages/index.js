import React, { useContext } from "react";
import loadable from '@loadable/component';
import { VisitedContext } from "../contexts/VisitedContext";

import Hero from "../components/HeroSection";
const SEO = loadable(() => import('../components/SEO'));
const ServicesSection = loadable(() => import('../components/ServicesSection'));
const TeaserSection1 = loadable(() => import('../components/TeaserSection1'));
const ProjectSection = loadable(() => import('../components/ProjectSection'));
const TeaserSection2 = loadable(() => import('../components/TeaserSection2'));
const InstagramSection = loadable(() => import('../components/InstagramSection'));
const LoadAnimation = loadable(() => import('../components/LoadAnimation'));


export default () => {
  const [visited] = useContext(VisitedContext);

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