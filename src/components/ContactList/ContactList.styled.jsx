import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: grid;
  row-gap: 16px;
  column-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

  @media (max-width: 767px) {
    row-gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
