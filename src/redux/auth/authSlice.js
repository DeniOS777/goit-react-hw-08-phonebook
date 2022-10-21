import { createSlice } from '@reduxjs/toolkit';
import { SignUp, LogIn, LogOut } from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [SignUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [LogIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [LogOut.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
