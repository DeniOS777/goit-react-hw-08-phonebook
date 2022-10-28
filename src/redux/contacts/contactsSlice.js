import { combineReducers } from '@reduxjs/toolkit';
import { itemsSlice } from 'redux/contacts/items';
import { isLoadingSlice } from 'redux/contacts/isLoadingSlice';
import { errorSlice } from 'redux/contacts/error';

export default combineReducers({
  items: itemsSlice.reducer,
  isLoading: isLoadingSlice.reducer,
  error: errorSlice.reducer,
});
