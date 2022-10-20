import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <footer style={{ padding: '20px', backgroundColor: 'grey' }}>
        <p>Copiright</p>
      </footer>
    </>
  );
};
