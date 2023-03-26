import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addService, changeServiceField, delletingServiceField, editCheckService, editService} from './../actions/actions'

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);
  const check = useSelector(state => state.checkingEdit);
  const dispatch = useDispatch();
  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price))
    dispatch(delletingServiceField())
  }

  const cancelEdit = () => {
    dispatch(editCheckService(false));
    dispatch(delletingServiceField());
  }
  const saveEdit = () => {
    const editId = check.id;
    dispatch(editService(editId, item.name, item.price))
    dispatch(editCheckService(false));
    dispatch(delletingServiceField());
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='name' onChange={handleChange} value={item.name}/>
        <input name='price' onChange={handleChange} value={item.price}/>
        {check.status ?
          (<>
            <button onClick={() => saveEdit()}>save</button>
            <button onClick={() => cancelEdit()}>cancel</button>
          </>) :
          (
            <button type='submit'>Save</button>
          )
        }
      </form>
    </div>
  )
}
