import React from 'react'
import { GlobalCartContext } from '../ContextAPI/CartContext'

//component
import CartItem from "../Component/CartItem"

//css
import "../CSS/Cart.css"


const Cart = () => {
  const {Cart} = GlobalCartContext();
  console.log(Cart);
  return (
    <section>
        <div className="Cart">
        <div className="cart_heading">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>


        <div className="cart-item">
          {Cart.map((curElm)=>{
            return <CartItem key={curElm.id} {...curElm} />
          })}
        </div>
        

        </div>
    </section>
  )
}

export default Cart