import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectorLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectorLoggedIn);

  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div style={{ display: 'flex', gap: '20px', marginLeft: 'auto' }}>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </nav>
  );
};
