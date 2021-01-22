import React, { useState } from "react";

const VisitedContext = React.createContext();

const VisitedProvider = ({ children }) => {
  const [visited, setVisited] = useState(false);

  return (
    <VisitedContext.Provider value={[visited, setVisited]}>
      {children}
    </VisitedContext.Provider>
  );
};

export { VisitedContext, VisitedProvider };
