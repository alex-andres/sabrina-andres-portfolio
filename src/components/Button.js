import styled from '@emotion/styled';
import { colors } from '../components/theme';

const Button = styled("button")`
  background-color: ${colors.black};
  color: white;
  padding: .75rem 1rem;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.8em;
  text-decoration: none;
  font-family: Raleway;
  font-weight: 300;
  transition: 0.5s;
  &:hover {
    background-color: ${colors.lightGray};
    color: black;
    transition: 0.5s;
  }
`;

export default Button;
