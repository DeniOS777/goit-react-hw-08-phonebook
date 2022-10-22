import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu';
import { selectorLoggedIn } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav';
import { HeaderNav, Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectorLoggedIn);

  return (
    <HeaderNav>
      <Link to="/home">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderNav>
  );
};
