import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//icons
import { FaMinus, FaPlus } from "react-icons/fa";

//css
import "../CSS/AddToCart.css"
//cartContext
import { GlobalCartContext } from "../ContextAPI/CartContext";

const AddToCart = ({ products }) => {
  const {
    id,
    price,
 
  } = products;


  const {AddToCart} = GlobalCartContext();


  const [count, setCount] = useState(1);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1 ) ;
  };

  return (
    <>
      <div className="ADD-TO-CART-DIV">
        <div className="quantity">
          <FaPlus onClick={Increase} className="Increase" />
          <p>{count}</p> 
          <FaMinus onClick={Decrease}  className="Decrease" />
        </div>
        <NavLink to="/Cart" onClick={()=>AddToCart(id,price,products)}>
          <button className='Add-To-Cart-btn'>ADD TO CART</button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
