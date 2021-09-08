import React from "react"
import Button from "../components/Button"
import styled from "@emotion/styled"
export default () => (
  <StyledContactConfirmation>
    <h1>Message Sent</h1>
    <p>Thank you for your submission!</p>
    <Button to="/">Back to Home</Button>
  </StyledContactConfirmation>
)

const StyledContactConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: -8rem auto -1rem;
  padding: 0 3vw;
  h1{
    margin-bottom: 1rem;
  }
  p{
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 769px){
    height: 80vh;
    margin: -8rem auto 0;
  }
`
