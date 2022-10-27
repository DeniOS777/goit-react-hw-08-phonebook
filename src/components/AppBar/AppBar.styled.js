import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
`;

export const Header = styled.header`
  z-index: 5;
  background-color: ${p => p.theme.colors.header};
  box-shadow: 0px 9px 12px -10px #ffffff, 5px 5px 15px 5px rgb(0 0 0 / 0%);
`;
