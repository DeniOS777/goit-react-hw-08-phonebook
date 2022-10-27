import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[6]}px;
  border-radius: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.footer};

  @media (max-width: 480px) {
    padding-left: ${p => p.theme.space[4]}px;
    padding-right: ${p => p.theme.space[4]}px;
  }
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
`;

export const Input = styled(Field)`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.header};
  border: ${p => `1px solid ${p.theme.colors.lightGrey}`};
  border-radius: ${p => p.theme.radii.sm};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.middleGrey};
  }

  &:focus {
    border-color: transparent;
    outline: ${p => `2px solid ${p.theme.colors.lightBlue}`};
  }
`;

export const LogIn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.sm};
  border-style: none;
  background-color: ${p => p.theme.colors.link};
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.linkHover};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.inputBorder};
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  padding-top: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.error};
  text-align: end;
  border-radius: ${p => p.theme.radii.sm};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[4]}px;

  &:last-of-type {
    margin-bottom: ${p => p.theme.space[6]}px;
  }
`;
