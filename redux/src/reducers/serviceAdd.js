import {CHANGE_SERVICE_FIELD, DELLETING_SERVICE_FIELD, EDIT_SERVICE_FIELD} from '../actions/actionTypes'
const initialState = {name: '', price: ''}

export default function serviceAddReducer(state = initialState, action) {
  switch(action.type) {
    case  CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case DELLETING_SERVICE_FIELD:
      return {...initialState}
    case EDIT_SERVICE_FIELD:
      return {name: action.payload.name, price: action.payload.price};
    default: 
      return state;
  }
}