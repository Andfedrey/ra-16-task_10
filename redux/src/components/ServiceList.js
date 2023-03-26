import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editCheckService, editService, editServiceField, removeService } from '../actions/actions';

export default function ServiceList() {
  const items = useSelector(state => { 
    return state.serviceList}); 
  const dispatch = useDispatch();
  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
    dispatch(editServiceField(id, name, price));
    dispatch(editCheckService(true, id));
  }
  const handleRemove = id => {dispatch(removeService(id))}
  return (
    <div>
      <ul>
        {items?.map(item => (
          <>
            <li key={item.id} >{item.name} {item.price}</li>
              <button onClick={() => handleEdit(item.id, item.name, item.price)}>edit</button>
              <button onClick={() => handleRemove(item.id)}>x</button>
          </>
        ))}
      </ul>
    </div>
  )
}
