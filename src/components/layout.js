import React, {useContext, useEffect} from "react";
import GlobalStyles from "../styles/Global";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Footer from "./footer";
import { MenuProvider } from "../state/Menu";
import Navbar from "./nav/";
import { VisitedContext } from "../contexts/VisitedContext";

const Layout = ({ children }) => {
  const [visited, setVisited] = useContext(VisitedContext);
  const { title, description } = useSiteMetadata();
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
      </Helmet>
      <GlobalStyles />
      <MenuProvider>
        <Navbar />
      </MenuProvider>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
