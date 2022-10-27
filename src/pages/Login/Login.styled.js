import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${p => p.theme.space[7]}px;
  padding-bottom: ${p => p.theme.space[7]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin: 0 auto;
  max-width: 450px;
  height: calc(100vh - 127px);
  overflow-y: auto;

  *:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
