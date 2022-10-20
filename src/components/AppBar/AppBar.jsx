import { Navigation } from 'components/Navigation';
import React from 'react';

export const AppBar = () => {
  return (
    <header
      style={{
        padding: '15px',
        backgroundColor: 'lightgray',
      }}
    >
      <Navigation />
    </header>
  );
};
