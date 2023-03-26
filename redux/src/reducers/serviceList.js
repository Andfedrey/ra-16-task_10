import {nanoid} from 'nanoid'
import { EDIT_SERVICE, FILTER_SERVICE } from '../actions/actionTypes';
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
    case FILTER_SERVICE:
      const {text, arr} = action.payload
      return arr.filter((service) => service.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    default:
      return state;
  }
}