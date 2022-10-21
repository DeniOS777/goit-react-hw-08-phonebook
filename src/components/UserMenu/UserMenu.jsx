import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectorUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const userName = useSelector(selectorUserName);
  console.log('userName', userName);

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
      <p>{userName}</p>
      <button
        style={{
          padding: '0',
          borderStyle: 'none',
          outline: '1px solid orange',
          backgroundColor: 'transparent',
        }}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
