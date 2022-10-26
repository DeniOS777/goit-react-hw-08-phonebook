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
  padding-bottom: 20px;
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Footer = styled.footer`
  background-color: #303846;
  text-align: center;
`;

export const Text = styled.p`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  letter-spacing: 0.02em;
`;

export const Link = styled.a`
  display: inline-flex;
  padding: 8px;
  color: currentColor;
  text-decoration: none;

  & svg {
    transition: fill 250ms ease-in-out;
  }

  &:hover svg {
    fill: orangered;
  }
`;
