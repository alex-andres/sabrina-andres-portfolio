import React, {useContext, useEffect} from "react";
import GlobalStyles from "../styles/Global";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Footer from "./footer";
import SimpleReactLightbox from "simple-react-lightbox";
import { MenuProvider } from "../state/Menu";
import Navbar from "./nav/";
import { VisitedContext } from "../contexts/VisitedContext";

const Layout = ({ children }) => {
  const [visited, setVisited] = useContext(VisitedContext);
  const { title, description } = useSiteMetadata();
  // // const toggle = React.useCallback(() => {
  // //   setVisited(visited === true);
  // //   localStorage.setItem("visited", "true");
  // // }, [visited, setVisited]);
  useEffect(() => {
    if (localStorage.getItem("visited") === "true") {
      setVisited(true);
    }
  });
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
        <link rel="preconnect" href="https://use.typekit.net/qmg7rbf.css" />
      </Helmet>
      <GlobalStyles />
      <MenuProvider>
        <Navbar />
      </MenuProvider>
      <main>
        <SimpleReactLightbox>{children}</SimpleReactLightbox>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
