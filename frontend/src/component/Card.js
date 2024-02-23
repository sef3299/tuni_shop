import React, { useEffect } from 'react'
import "./Card.css"
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getcurrentuser, remove } from '../Redux/Action'
import axios from 'axios'

function Cart() {
    const Cart=useSelector(state=>state.CartReducer)
    console.log(Cart)

    const dispatch=useDispatch()
    useEffect(() => {
    
      dispatch(getcurrentuser())
      
      }, [])
      const user=useSelector(state=>state.userReducer.user)
      console.log(user)
    const handelchekout=async()=>{
        await axios.post("http://localhost:9000/payment",{cart:Cart}).then(res=>{
            if(res.data.URL){
                window.location.href=res.data.URL
            }
        }
       
        
        )
    }
  return (
    <div><>
   
    <div className="container">
      <section id="cart">
      {Cart.map(e =>
  e && e.product && e.product.image  ? (
    <article className="product">
      <header>
        <a className="remove" onClick={() => dispatch(remove(e.product.id))}>
          <img
            src={e.product.image}
            alt=""
          />
          <h3>Remove product</h3>
        </a>
      </header>
      <div className="content">
        <h1>{e.product.title}</h1>
        {e.product.description}
      </div>
      <footer className="content">
        <span className="qt">{e.quantity}</span>
        <h2 className="full-price">{e.product.price * e.quantity}</h2>
        <h2 className="price">{e.product.price}</h2>
      </footer>
    </article>
  ) : null
)}

        
      </section>
    </div>
    <footer id="site-footer">
      <div className="container clearfix">
        <div className="left">
          <h2 className="subtotal">
            Subtotal: <span>{Cart.reduce((acc,element)=>acc+element.product.price*element.quantity,0)}</span>€
          </h2>
          <h3 className="tax">
            Taxes (5%): <span></span>€
          </h3>
          <h3 className="shipping">
            Shipping: <span></span>€
          </h3>
        </div>
        <div className="right">
          <h1 className="total">
            Total: <span>{Cart.reduce((acc,element)=>acc+element.product.price*element.quantity,0)}</span>€
          </h1>
          {user.name?<a className="btn" onClick={handelchekout}>Checkout </a>:<Link to={"/login"}>you need to login</Link>}
        </div>
      </div>
    </footer>
  </>
  </div>
  )
}

export default Cart