import React from 'react';
// import { FaUserCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectorUserName } from 'redux/auth/authSelectors';
import { Wrap, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectorUserName);

  const logOutUser = () => dispatch(logOut());

  return (
    <Wrap>
      <p>Hi, {userName}</p>
      <Button type="button" onClick={logOutUser}>
        Logout
      </Button>
    </Wrap>
  );
};
