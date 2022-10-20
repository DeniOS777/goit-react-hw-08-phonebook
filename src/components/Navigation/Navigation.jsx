import { UserMenu } from 'components/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      {true && <NavLink to="/contacts">Contacts</NavLink>}
      {false ? (
        <UserMenu />
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};
