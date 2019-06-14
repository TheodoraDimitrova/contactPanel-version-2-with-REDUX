import { GET_CONTACTS, EDIT_CONTACT } from '../actions/types';
import { ADD_CONTACT } from '../actions/types';
import { DELETE_CONTACT } from '../actions/types';
import { GET_CONTACT } from '../actions/types';

const initialSate = {
  contacts: [],
  contact: {}
};

export default function(state = initialSate, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts] //state.contacts.push(action.payload)
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };

    default:
      return state;
  }
}
