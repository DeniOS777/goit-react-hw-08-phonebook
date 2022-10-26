import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import {
  FormLogin,
  Label,
  Input,
  LogIn,
  Message,
  Wrap,
} from './LoginForm.styled';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Should be more 4 characters')
    .required('This field is required'),
});

const Error = ({ name }) => (
  <ErrorMessage name={name} render={msg => <Message>{msg}</Message>} />
);

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    dispatch(logIn(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmmit}
    >
      {({ isSubmitting, isValid }) => (
        <FormLogin autoComplete="off">
          <Wrap>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="123@mail.com"
            />
            <Error name="email" />
          </Wrap>

          <Wrap>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="12345678"
            />
            <Error name="password" />
          </Wrap>

          <LogIn type="submit" disabled={isSubmitting || !isValid}>
            Log In
          </LogIn>
        </FormLogin>
      )}
    </Formik>
  );
};
