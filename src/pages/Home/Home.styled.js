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
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  height: calc(100vh - 127px);
  overflow-y: auto;

  @media (max-width: 480px) {
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: ${p => p.theme.space[7]}px;
  }
`;

export const HomePageTitle = styled.h1`
  margin: 0 auto;
  max-width: 900px;
  font-size: ${p => p.theme.fontSizes.xl};
  letter-spacing: 0.02em;
  color: ${p => p.theme.colors.white};
  text-align: center;

  @media (max-width: 767px) {
    font-size: ${p => p.theme.fontSizes.xm};
  }

  @media (max-width: 480px) {
    font-size: ${p => p.theme.fontSizes.lm};
    line-height: ${p => p.theme.lineHeights.body};
    letter-spacing: 0.03em;
  }

  & svg {
    display: block;
    margin: 0 auto;
    width: 128px;
    height: 128px;
    fill: ${p => p.theme.colors.redHover};

    &:hover {
      transform: scale(1.2);
      animation: ${rotate} 200ms linear infinite;
    }

    @media (max-width: 767px) {
      width: 96px;
      height: 96px;
    }

    @media (max-width: 480px) {
      width: 64px;
      height: 64px;
    }
  }
`;
