import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0deg);
  transform: scale(1.2);
}
25% {
  transform: rotate(15deg);
}
50% {
    transform: rotate(0deg);
}
75% {
    transform: rotate(-15deg);
}
100% {
    transform: rotate(0deg);
    transform: scale(1.2);
}
`;

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
    width: 128px;
    height: 128px;
    fill: #b92323;

    &:hover {
      transform: scale(1.2);
      animation: ${rotate} 200ms linear infinite;
    }
  }
`;
