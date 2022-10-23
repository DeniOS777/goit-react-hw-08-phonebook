import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
`;

export const Button = styled.button`
  padding: 8px;
  border-style: none;
  background-color: #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #b22222;
  }
`;
