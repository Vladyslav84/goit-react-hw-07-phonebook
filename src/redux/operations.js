// import axios from 'axios';
import * as actions from '../redux/actions';
import * as api from '../api/api'
import { createAsyncThunk } from '@reduxjs/toolkit';
   
// export const fetcContacts = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());
    
//      try {
//          const contactsFromDB = await api.fetcContacts();
//         //  console.log(contactsFromDB)
//          dispatch (actions.fetchContactsSuccess(contactsFromDB))
    
//      } catch (error) {
//          dispatch(actions.fetchContactError(error));
//     }
// };

export const fetcContacts = createAsyncThunk(
    'contacts/fetcContacts',
     async () => {
    try {
      const contactsFromDB = await api.fetcContacts();
      return contactsFromDB;
    } catch (error) {
      return (error);
    }
  },

)
