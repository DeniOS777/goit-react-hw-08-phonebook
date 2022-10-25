import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
  /* height: 300px; */
  padding: 32px;
  border-radius: 8px;
  background-color: #303846;
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
`;

export const LogIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: auto; */
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
`;

export const Message = styled.p`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 14px;
  font-weight: 500;
  color: red;
  text-align: end;
  border-radius: 4px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;

  &:last-of-type {
    margin-bottom: 16px;
  }
`;
