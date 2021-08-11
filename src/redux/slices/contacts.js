import { createSlice } from "@reduxjs/toolkit";


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