import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 8px;
  color: #000;
  font-weight: 500;
  letter-spacing: 0.02em;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &.active {
    color: #fff;
    background-color: #f46a0d;
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: lightgray;
  }
`;
