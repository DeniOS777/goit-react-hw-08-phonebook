import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm';
import { Container } from './Login.styled';

const Login = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};

export default Login;
