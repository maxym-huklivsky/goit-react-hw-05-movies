import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 300ms;
  font-weight: 600;
  text-decoration: none;
  padding: 8px;

  height: 75%;
  border-radius: 5px;

  &.active {
    background-color: orange;
    color: #682a91;
  }

  &:hover,
  &:focus {
    color: #682a91;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 16px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
