import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Footer = styled.footer`
  padding: 30px;
  background-color: #303846;
  text-align: center;
`;

export const Text = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
`;

export const Link = styled.a`
  display: inline-flex;
  color: currentColor;
  text-decoration: none;
`;
