import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as operations from '../operations';
import { useDispatch } from 'react-redux';
// console.log(operations.fetcContacts)
// const contactsFromDb = api.fetcContacts().then(contactsArr => contactsArr);

// console.log(operations.fetcContacts())
//   const dispatch = useDispatch;

// dispatch(operations.fetcContacts());
const contactsSlice = createSlice({
      name: 'contacts',
    initialState: { entities: []},
    reducers: {
        
        addContact: (state, action) => [action.payload, ...state.entities],
        deleteContact: (state, action) => state.filter(contact => contact.id !== action.payload),
    },
    extraReducers: {
        [operations.fetcContacts.fulfilled](state, action) {
            // state.entities.push(action.payload)
            return {
                ...state,
                entities: [...state.entities, ...action.payload]
            }
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;