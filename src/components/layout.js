import React from "react";
import GlobalStyles from "../styles/Global";
import Helmet from "react-helmet";
import useSiteMetadata from "../hooks/use-sitemetadata";
import Footer from "./footer";
import SimpleReactLightbox from "simple-react-lightbox";
// import LoadAnimation from "./LoadAnimation";
import { MenuProvider } from "../state/Menu";
import Navbar from "./nav/";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <description>{description}</description>
        <link rel="stylesheet" href="https://use.typekit.net/qmg7rbf.css" />
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
