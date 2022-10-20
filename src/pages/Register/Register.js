import React from 'react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Register;
