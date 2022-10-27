import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WrapAuthNav = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  margin-left: auto;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.middle};
  letter-spacing: 0.02em;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.link};
    box-shadow: 0px 7px 4px -6px #ffffff, 5px 5px 10px 4px rgb(0 0 0 / 0%);
  }

  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.grey300};
  }
`;
