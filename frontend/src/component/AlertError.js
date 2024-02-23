import React from 'react'
import { useSelector } from 'react-redux';

function AlertError() {
    const errors = useSelector((state) => state.userReducer.errors);
    console.log(errors)
  return (
    <div>
        {errors.map((el) => (
        <span key={el.id} style={{color:"red"}}>
          {el.msg}<br/>
        </span>
      ))}
    </div>
  )
}

export default AlertError