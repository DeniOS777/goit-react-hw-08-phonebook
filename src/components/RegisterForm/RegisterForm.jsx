import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUp } from 'redux/auth/authOperations';
import {
  FormRegister,
  Label,
  Input,
  Register,
  Message,
  Wrap,
} from './RegisterForm.styled';

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    dispatch(signUp(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmmit}
    >
      {({ isSubmitting, isValid }) => (
        <FormRegister autoComplete="off">
          <Wrap>
            <Label htmlFor="name">Username</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Derek Menson"
            />
            <Error name="name" />
          </Wrap>

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

          <Register type="submit" disabled={isSubmitting || !isValid}>
            Register
          </Register>
        </FormRegister>
      )}
    </Formik>
  );
};
