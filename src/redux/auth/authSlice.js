import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});
