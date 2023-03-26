import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {filterServersField, filterService} from './../actions/actions'

export default function Filter() {

  const search = useSelector((state) => state.filterField)
  
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(filterServersField(e.target.value))
  }

  return (
    <div>
      <laber>filter</laber>
      <input type='text' onChange={handleChange} value={search.text}></input>
    </div>
  )
}
