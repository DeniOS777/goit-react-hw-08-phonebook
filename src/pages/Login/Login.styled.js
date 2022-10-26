import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  max-width: 450px;
  height: calc(100vh - 127px);

  *:last-child {
    margin-bottom: 0;
  }
`;
