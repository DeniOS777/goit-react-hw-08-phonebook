import React from 'react';
import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';
import { Container } from './Register.styled';

const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <RegisterForm />
    </Container>
  );
};

export default Register;
