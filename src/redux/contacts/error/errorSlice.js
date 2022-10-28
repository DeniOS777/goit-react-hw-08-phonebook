import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [fetchContacts.pending]: () => null,
    [fetchContacts.rejected]: (_, { payload }) => payload,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { payload }) => payload,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, { payload }) => payload,
  },
});
