import {nanoid} from 'nanoid'
import { EDIT_SERVICE } from '../actions/actionTypes';
import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

export const initialStateArr = [
  {id: nanoid(), name: 'Changing mirror', price: 2200},
  {id: nanoid(), name: 'Changing display', price: 9800},
]

export default function serviceListReducer(state = initialStateArr, action) {
  
  switch(action.type) {
    case ADD_SERVICE:
    const {name, price} = action.payload;
      return [...state, {id: nanoid(), name, price: Number(price)}]
    case REMOVE_SERVICE:
    const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case EDIT_SERVICE:
      return state.map(service => (service.id === action.payload.id) ? {...service, name: action.payload.name, price: action.payload.price } : service)
    default:
      return state;
  }
}