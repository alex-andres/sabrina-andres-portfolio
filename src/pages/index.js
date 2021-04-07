import React, { useContext } from "react";
import SEO from "../components/SEO";
import LoadAnimation from "../components/LoadAnimation";
import { VisitedContext } from "../contexts/VisitedContext";
import Loadable from "@loadable/component";
const HeroLoadable = Loadable(()=> import('../components/Hero'))
const TeaserSection1Loadable = Loadable(()=> import('../components/TeaserSection1'));
const ServicesSectionLoadable = Loadable(()=> import('../components/ServicesSection'));
const ProjectSectionLoadable = Loadable(()=> import('../components/ProjectSection'));
const TeaserSection2Loadable = Loadable(()=> import('../components/TeaserSection2'));
const InstagramSectionLoadable = Loadable(()=> import('../components/InstagramSection'));

export default () => {
  const [visited] = useContext(VisitedContext);
  ;


  if (visited === true) {
    return (
      <>
        <SEO
          title="Art Advisory in Los Angeles & Zurich - SAAA"
          description="Sabrina Andres offers exceptional art advisory services in Los Angeles with a focus on contemporary art, ranging from early career to blue chip artists."
        />
        <HeroLoadable />
        <TeaserSection1Loadable />
        <ServicesSectionLoadable />
        <ProjectSectionLoadable />
        <TeaserSection2Loadable />
        <InstagramSectionLoadable />
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
        <HeroLoadable />
        <TeaserSection1Loadable />
        <ServicesSectionLoadable />
        <ProjectSectionLoadable />
        <TeaserSection2Loadable />
        <InstagramSectionLoadable />
      </>
    );
  }
};
