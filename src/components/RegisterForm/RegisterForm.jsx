import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from 'components/App.styled';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required('This field is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Should be more 4 characters')
    .required('This field is required'),
});

export const RegisterForm = () => {
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Container>
      <Formik
        validationSchema={ValidationSchema}
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={handleSubmmit}
      >
        {({ isSubmitting }) => (
          <Form
            autoComplete="off"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="username">Username</label>
            <Field id="username" type="text" name="username" />
            <ErrorMessage name="username" component="div" />

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
