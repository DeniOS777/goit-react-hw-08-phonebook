import React from 'react';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { HeaderNav, Link } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn, isRefreshUser } = useAuth();

  return (
    <HeaderNav>
      <Link to="/" end>
        Home
      </Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      {isLoggedIn && !isRefreshUser ? <UserMenu /> : <AuthNav />}
    </HeaderNav>
  );
};
