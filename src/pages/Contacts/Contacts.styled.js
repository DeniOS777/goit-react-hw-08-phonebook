import styled from 'styled-components';

export const Container = styled.div`
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin: 0 auto;
  max-width: 1200px;

  *:last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }
`;
export const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${p => p.theme.space[5]}px;
  max-width: 480px;
`;
