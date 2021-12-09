import styled from "@emotion/styled";

const Button = styled("button")`
  background-color: var(--black);
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.8em;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 300;
  transition: 0.5s;
  border: rgba(0, 0, 0, 0) 1px solid;

  &:hover {
    background-color: var(--white);
    color: black;
    transition: 0.5s;
    border: var(--black) 1px solid;
  }
  &:focus {
    outline: 1px black solid;
  }
  &:disabled{
    background-color: var(--midGray)
  }
`;

export default Button;
