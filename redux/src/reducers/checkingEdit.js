import {EDIT_CHECK_SERVICE } from "../actions/actionTypes";

const initialState = {status: false, id: null};

export default function checkingEditReducer(state = initialState, action) {
  
  switch(action.type){
    case EDIT_CHECK_SERVICE:
    const {status, id} = action.payload;
    return {...state, status, id}
  default:
    return state;
  } 

}