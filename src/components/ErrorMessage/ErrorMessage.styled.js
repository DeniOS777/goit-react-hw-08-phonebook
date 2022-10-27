import styled from 'styled-components';

export const Error = styled.p`
  margin: 0 auto;
  padding: ${p => p.theme.space[2]}px;
  max-width: 480px;
  font-weight: ${p => p.theme.fontWeights.lightBold};
  color: ${p => p.theme.colors.white};
  text-align: center;
  background-color: ${p => p.theme.colors.red};
  border-radius: ${p => p.theme.radii.md};
`;
