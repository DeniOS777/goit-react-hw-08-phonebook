import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-left: auto;
`;

export const UserName = styled.p`
  color: #ffffff;
  font-weight: 600;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  color: #000000;
  background-color: #ccc;
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  transition: background-color 200ms ease-in-out, color 200ms ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #b22222;
  }
`;
