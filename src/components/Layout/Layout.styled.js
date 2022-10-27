import styled from 'styled-components';
import telephone from '../../images/tele.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
  background-image: url(${telephone});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

export const Container = styled.div`
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const Footer = styled.footer`
  background-color: ${p => p.theme.colors.footer};
  text-align: center;
`;

export const Text = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.white};
  letter-spacing: 0.02em;
`;

export const Link = styled.a`
  display: inline-flex;
  padding: ${p => p.theme.space[3]}px;
  color: currentColor;
  text-decoration: none;

  & svg {
    transition: fill 250ms ease-in-out;
  }

  &:hover svg {
    fill: ${p => p.theme.colors.link};
  }
`;
