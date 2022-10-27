import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshUser } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
