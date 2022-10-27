import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: grid;
  row-gap: ${p => p.theme.space[4]}px;
  column-gap: ${p => p.theme.space[4]}px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  @media (max-width: 767px) {
    row-gap: ${p => p.theme.space[3]}px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
