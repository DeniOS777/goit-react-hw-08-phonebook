import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  margin-left: auto;
`;

export const UserName = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.lightBold};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.grey300};
  border-radius: ${p => p.theme.radii.sm};
  border-style: none;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.logout};
  }
`;
