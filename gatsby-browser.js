import React from "react";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onInitialClientRender = () => {
  if (!localStorage.noFirstVisit) {
    // show the element
    // and do the animation you want
    document.querySelector(".loader").style.display = "flex";
    setTimeout(function() {
      document.querySelector(".loader").style.display = "none";
    }, 7500);

    // check this flag for escaping this if block next time
    localStorage.noFirstVisit = "1";
  }
};
