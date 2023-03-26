import { ADD_SERVICE, CHANGE_SERVICE_FIELD, DELLETING_SERVICE_FIELD, EDIT_CHECK_SERVICE, EDIT_SERVICE, EDIT_SERVICE_FIELD, FILTER_SERVICE, FILTER_SERVICE_FIELD, REMOVE_SERVICE } from "./actionTypes";

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}
export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}}
}
export function editService(id, name, price){
  return {type: EDIT_SERVICE, payload: {id, name, price}}
}
export function filterService(text, arr){
  return {type: FILTER_SERVICE, payload:{text, arr}}
}

export function editServiceField(id, name, price) {
  return {type: EDIT_SERVICE_FIELD, payload: {id, name, price}}
}
export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}
export function delletingServiceField() {
  return {type: DELLETING_SERVICE_FIELD}
}

export function editCheckService(status, id = null) {
  return {type: EDIT_CHECK_SERVICE, payload: {status, id}}
}

export function filterServersField(text){
  return {type: FILTER_SERVICE_FIELD, payload: {text}}
}
