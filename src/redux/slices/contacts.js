import { createSlice } from "@reduxjs/toolkit";
import * as operations from '../operations';
import { useDispatch } from 'react-redux';

// const contactsFromDb = api.fetcContacts().then(contactsArr => contactsArr);

// console.log(operations.fetcContacts())
//   const dispatch = useDispatch;

// dispatch(operations.fetcContacts());
const contactsSlice = createSlice({
  
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => [action.payload, ...state],
        deleteContact: (state, action) => state.filter(contact => contact.id !== action.payload),
           }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;