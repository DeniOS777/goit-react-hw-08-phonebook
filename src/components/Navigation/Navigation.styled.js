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
    background-color: #f15c27;
    box-shadow: 0px 7px 4px -6px #ffffff, 5px 5px 10px 4px rgb(0 0 0 / 0%);
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: lightgray;
  }
`;
