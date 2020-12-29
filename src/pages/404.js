import React from "react";
import Button from "../components/Button";
import styled from "@emotion/styled";

const FourOFour = () => {
  return (
    <CenteredSection>
      <h1>Page not found</h1>
      <p>Oops! The page you are looking for has been removed or relocated</p>
      <Button to="/">Go Back to Homepage</Button>
    </CenteredSection>
  );
};

export default FourOFour;

const CenteredSection = styled.section`
  max-width: 90vw;
  margin: 0 auto;
  h1 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
`;
