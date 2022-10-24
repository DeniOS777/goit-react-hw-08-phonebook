import styled from 'styled-components';

export const WrapTitle = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: center;
  height: calc(100vh - 127px);
  overflow-y: auto;
`;

export const HomePageTitle = styled.h1`
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
