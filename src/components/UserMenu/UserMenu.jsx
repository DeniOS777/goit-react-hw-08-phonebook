import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'redux/auth/authOperations';
import { selectorUserName } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectorUserName);

  const logoutUser = () => dispatch(LogOut());

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
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  );
};
