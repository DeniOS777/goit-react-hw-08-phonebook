import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'components/App.styled';
import { LogIn } from 'redux/auth/authOperations';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Should be more 4 characters')
    .required('This field is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    dispatch(LogIn(values));
    setSubmitting(false);
    resetForm();
  };

  return (
    <Container>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmmit}
      >
        {({ isSubmitting }) => (
          <Form
            autoComplete="off"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
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
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
