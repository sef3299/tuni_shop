import { Navigate } from "react-router-dom"
import { ADDTOCART, ALERT_ERROR, CLEAR_ERROR, GETCURRENT, LOGIN, LOGOUT, REGISTER, REMOVEFROMCART } from "./ActionType"

import axios from 'axios'
export const alert_error = (msg) => async (dispatch) => {
    const id = Math.random();
    dispatch({ type: ALERT_ERROR, payload: { msg, id } });
    setTimeout(() => {
      dispatch({ type: CLEAR_ERROR, payload: id });
    }, 5000);
  };
export const register=(data,Navigate)=>async(dispatch)=>{
    try {
       const res= await axios.post("http://localhost:9000/user/register",data)
        dispatch({type:REGISTER,payload:res.data})
        Navigate("/")
    } catch (error) {
        console.log(error)
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          })
    }
}
export const login =(data,Navigate)=>async(dispatch)=>{
    try{
    await axios.post("http://localhost:9000/user/login",data).then(res=>dispatch({type:LOGIN,payload:res.data}))
    Navigate("/")
} catch (error) {
    console.log(error)
    error.response.data.errors.forEach((el) => {
        dispatch(alert_error(el.msg));
      });
}
}
export const getcurrentuser=()=>async(dispatch)=>{
    const config={
        headers:{
            token:localStorage.getItem("token")
        }
    }
    try {
        await axios.get("http://localhost:9000/user/getcurrentuser",config)
        .then(res=>dispatch({type:GETCURRENT,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const logout=()=>{
    localStorage.removeItem("token")
    
    return {type:LOGOUT}
}

export const addtocart=(data)=>{
    return {type:ADDTOCART,payload:data}
}
export const remove=(id)=>{
    return {type:REMOVEFROMCART,payload:id}
}
export const updateteuser= (id,data) => async (dispatch) => {
    try {
      await axios.put("http://localhost:9000/user/update/"+id,data);
      dispatch(getcurrentuser());
    } catch (error) {
      console.log(error);
    }
  };
