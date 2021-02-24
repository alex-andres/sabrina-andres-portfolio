import React from "react";
import Layout from "./src/components/layout";
import { VisitedProvider } from "./src/contexts/VisitedContext";
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// export const wrapRootElement = ({ element }) => {
//   return <VisitedProvider>{element}</VisitedProvider>;
// };
