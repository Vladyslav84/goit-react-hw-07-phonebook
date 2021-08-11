// import axios from 'axios';
import * as actions from '../redux/actions';
import * as api from '../api/api'
   
export const fetcContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());
    
     try {
         const contactsFromDB = await api.fetcContacts();
         dispatch (actions.fetchContactsSuccess(contactsFromDB))
    
     } catch (error) {
         dispatch(actions.fetchContactError(error));
    }
};
