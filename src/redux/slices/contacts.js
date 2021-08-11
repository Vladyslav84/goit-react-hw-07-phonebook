import { createSlice } from "@reduxjs/toolkit";
import * as api from '../../api/api'



const contactsFromDb = api.fetcContacts().then(contactsArr => contactsArr);

console.log(contactsFromDb)

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