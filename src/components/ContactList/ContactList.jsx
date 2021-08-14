import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import { filteredSelector } from '../../redux/selectors';
import * as operations from '../../redux/operations';

export default function ContactList  ()  {

  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetcContacts()), [dispatch]);
  const filteredContactList = useSelector(filteredSelector);
 
  return (
    <ul className={s.contactList}>
      {filteredContactList.map((user) => (
             
        <li key={user.id} className={s.contactitem} >
          <span>{user.name} {user.number}</span>
          <button type='button' className={s.btn}
            onClick={() => dispatch(operations.deleteContacts(user.id))}
          >Delete</button>
          
        </li>
      ))
      } 
    </ul>
  )
}