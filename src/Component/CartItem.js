import React from 'react'

//component

//icons 

import {FaTrash} from "react-icons/fa"

//css
import "../CSS/Cart.css"

//context
import { GlobalCartContext } from '../ContextAPI/CartContext'

import CartAmount from './CartAmount'
const CartItem = ({id,title,images,price,count}) => {


  const {RemovedCartItem} = GlobalCartContext();


  
  return (

          <div className="cart_heading">
          <img src={images} alt=""  style={{width:'80px',height:'auto'}} />    
          <p className="cart-hide">{price}</p>
          <p>{count}</p> 
          <p className="cart-hide">{price*count}</p>
          <p>
            <FaTrash onClick={()=>{RemovedCartItem(id)}} />
          </p>
        </div>
        
  )
}

export default CartItem