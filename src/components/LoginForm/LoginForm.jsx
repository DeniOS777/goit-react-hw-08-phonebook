import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('This field is required'),
  password: Yup.string()
    .min(4, 'Should be more 4 characters')
    .required('This field is required'),
});

export const LoginForm = () => {
  const handleSubmmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <div>
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
            <label htmlFor="email">E-mail</label>
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
    </div>
  );
};
