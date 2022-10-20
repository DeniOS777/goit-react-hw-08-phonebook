import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'components/App.styled';
import { SignUp } from 'redux/auth/authOperations';

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Should be more 4 characters')
    .required('This field is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    dispatch(SignUp(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Container>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmmit}
      >
        {({ isSubmitting }) => (
          <Form
            autoComplete="off"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="name">Username</label>
            <Field id="name" type="text" name="name" />
            <ErrorMessage name="name" component="div" />

            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="password">Password</label>
            <Field id="password" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button
              style={{ width: '100px' }}
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
