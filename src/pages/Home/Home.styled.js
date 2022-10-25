import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  height: calc(100vh - 127px);
  overflow-y: auto;
`;

export const HomePageTitle = styled.h1`
  margin: 0 auto;
  max-width: 900px;
  font-size: 32px;
  color: #ffffff;
  text-align: center;

  & svg {
    display: block;
    margin: 0 auto;
    fill: #b92323;
  }
`;
