import React,{useState} from 'react'

//component

//css
import "../CSS/Cart.css"
const CartItem = ({id,title,images,price}) => {
  
  return (
    <div className='cart-heading'>
          <div className="cart_heading">
          <img src={images} alt="" />    
          <p className="cart-hide">{price}</p>
          <p className='quantity'></p> 
          <p className="cart-hide">{price}</p>
          <p>Remove</p>
        </div>
        
    </div>
  )
}

export default CartItem