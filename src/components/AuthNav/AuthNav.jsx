import React from 'react';
import { WrapAuthNav, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapAuthNav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </WrapAuthNav>
  );
};
