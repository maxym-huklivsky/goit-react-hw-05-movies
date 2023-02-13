import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background-color: aqua;
  margin: 8px 0;
  padding: 8px 12px;
  transition: 300ms;

  :hover,
  :focus {
    background-color: aquamarine;
  }
`;
