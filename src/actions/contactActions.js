import { GET_CONTACTS } from './types';
import { ADD_CONTACT } from './types';
import { DELETE_CONTACT } from './types';
import { EDIT_CONTACT } from './types';
import {GET_CONTACT} from './types'
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const editContact = (contact) => async dispatch => {
  const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact)

  dispatch({
    type: EDIT_CONTACT,
    payload: res.data
  });
};

export const getContact=(id)=>async (dispatch)=>{
   const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  })
}

export const deleteContact = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = contact => async dispatch => {
  await axios.post('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  });
};
