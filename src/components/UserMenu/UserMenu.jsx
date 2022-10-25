import React from 'react';
// import { FaUserCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Wrap, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userName } = useAuth();

  const logOutUser = () => dispatch(logOut());

  return (
    <Wrap>
      <UserName>Hi, {userName}</UserName>
      <Button type="button" onClick={logOutUser}>
        Logout
      </Button>
    </Wrap>
  );
};
