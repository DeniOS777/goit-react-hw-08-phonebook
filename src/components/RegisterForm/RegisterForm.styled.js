import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormRegister = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  background-color: #303846;

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Label = styled.label`
  margin-bottom: 4px;
  color: #ffffff;
`;

export const Input = styled(Field)`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: #ffffff;
  background-color: #515967;
  border: 1px solid #cecdcd;
  border-radius: 4px;

  &::placeholder {
    font-size: 14px;
    color: #a7a7a7;
  }

  &:focus {
    border-color: transparent;
    outline: 2px solid #4cb3d4;
  }
`;

export const Register = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  color: #ffffff;
  border-radius: 4px;
  border-style: none;
  background-color: #f15c27;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #e14913;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  color: red;
  text-align: end;
  border-radius: 4px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 32px;
  }
`;
