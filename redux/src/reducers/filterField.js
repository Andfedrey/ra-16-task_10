import { FILTER_SERVICE_FIELD } from "../actions/actionTypes";

const initialState = {text: ''}

export default function filterFieldReducer(state = initialState, action){
  switch(action.type){
    case FILTER_SERVICE_FIELD:
    return {...initialState, text: action.payload.text};
  default:
    return state;
  }
}