import React from 'react';
import { FaUserCheck } from 'react-icons/fa';

export const UserMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        marginLeft: 'auto',
      }}
    >
      <FaUserCheck />
      <p>name</p>
      <button style={{ padding: '0', borderStyle: 'none' }} type="button">
        Logout
      </button>
    </div>
  );
};
