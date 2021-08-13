import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/slices/contacts';
// import selectors from '../../redux/selectors';
import * as operations from '../../redux/operations';

export default function ContactList  ()  {
  
  const allContacts = useSelector(state => state.contactsSlice.entities);
  const filter = useSelector(state => state.filterSlice);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetcContacts()), []);
  const filteredContactList = allContacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter));
    // console.log(filter);
 
  return (
    <ul className={s.contactList}>
            { filteredContactList.map((user) => (
        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => dispatch(actions.deleteContact(user.id))}
          >Delete</button>
        </li>
      ))
      } 
    </ul>
  )
}