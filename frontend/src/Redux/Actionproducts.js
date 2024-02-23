import axios from 'axios'
import { GETPRODUCT, MYPRODUCT } from './Actiontypeproduct';

const Product_api="http://localhost:9000"
//all offers
export const getproduct = () => async (dispatch) => {
    try {
      const res = await axios.get(Product_api+"/product/get");
      dispatch({ type: GETPRODUCT, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };
//company offers
export const myproduct = () => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token")
      }
    }
    try {
      const res = await axios.get(Product_api+"/product/getmyproduct", config);
      dispatch({ type: MYPRODUCT, payload: res.data.myproduct });
    } catch (error) {
      console.log(error);
    }
  };
  //add offer
  export const addproduct = (data) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem("token")
      }
    }
    try {
      await axios.post(Product_api+"/product/create", data, config);
      dispatch(getproduct());
    } catch (error) {
      console.log(error);
    }
  };
  //update offer
  export const updateproduct = (id, data) => async (dispatch) => {
    try {
      await axios.put(Product_api+"/product/update"+id,data);
      dispatch(getproduct());
    } catch (error) {
      console.log(error);
    }
  };
  //delete offer
  export const deleteproduct = (id) => async (dispatch) => {
    try {
      await axios.delete(Product_api+"/product/delete"+id)
      dispatch(getproduct());
    } catch (error) {
      console.log(error);
    }
  };