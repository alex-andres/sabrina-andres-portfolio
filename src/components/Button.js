import styled from "@emotion/styled";
import { Link } from "gatsby";

const Button = styled(Link)`
  background-color: var(--black);
  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  line-height: 1.8em;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 300;
  transition: 0.5s;
  border: none;
  &:hover {
    background-color: var(--lightGray);
    color: var(--black);
    transition: 0.5s;
    border: var(--white) 1px solid;
  }
`;

export default Button;
