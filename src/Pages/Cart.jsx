import React,{useEffect} from "react";
import {Link} from "react-router-dom";

//css
import "../CSS/Cart.css";

//component
import CartItems from "../Component/CartItems"

import { useDispatch ,useSelector} from "react-redux";



const Cart = () => {

  const dispatch = useDispatch();


    const Cart = useSelector((state)=> state.cart.Cart)
    console.log(Cart);  
    const Shipping = 50;
  
    // Save cart to local storage whenever it changes
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(Cart));
    }, [Cart]);



  //calculate the total price
  let totalprice = 0;
  Cart.forEach((curElm) => {
    totalprice += curElm.price * curElm.quantity;
  });

  return (
    <>
      {Cart.length === 0 ? (
          <>
          <div  className="empty-cart-div">
          <img src="icon_empty_cart.png" alt="" />
          <h1 >Cart is empty</h1>
          <Link to='/'>please go for shopping</Link>
        </div>
          </>
      ) : (
        <div className="cart">
          <div className="cart-heading">
            <p className="">photo</p>
            <p className="cart-price">Price</p>
            <p className="cart-quantity">Quantity</p>
            <p>Delete</p>
            <p className="cart-subtotal">Subtotal</p>
          </div>

          <div className="cart-items">
            {Cart.map((curElm, index) => {
              return <CartItems key={index} {...curElm} />;
          })}
          </div>

          <div className="cart-total-value">
            <div className="cart-total">
              <div className="SubTotal">SubTotal : {totalprice}</div>
              <div className="shipping">Shipping : {Shipping}</div>
              <div className="total"> total :{totalprice + Shipping}</div>
            </div>
          </div>

          
        </div>
          )}
    </>
  );
};

export default Cart;
