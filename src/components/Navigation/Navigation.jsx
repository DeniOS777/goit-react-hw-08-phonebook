import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu';

export const Navigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px' }}>
      {/* {true ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <NavLink to="/">Home</NavLink>
      )} */}
      <NavLink to="/">Home</NavLink>
      {true && <NavLink to="/contacts">Contacts</NavLink>}
      {false ? (
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
