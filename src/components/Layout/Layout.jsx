import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';

export const Layout = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <AppBar />
      <main style={{ flexGrow: '1' }}>
        <Outlet />
      </main>
      <footer
        style={{
          padding: '30px',
          backgroundColor: '#303846',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#fff' }}>
          Copyright &copy; 2022. Developed by Denis Moskalenko
        </p>
      </footer>
    </div>
  );
};
