import React, { useState } from "react";
import { NavLink } from "react-router-dom";


//components
import CartAmount from "./CartAmount";
//icons

//css
import "../CSS/AddToCart.css"

//cartContext
import { GlobalCartContext } from "../ContextAPI/CartContext";



const AddToCart = ({ products }) => {
  const {
    id,
    price,
    stock
 
  } = products;


  const {AddToCart} = GlobalCartContext();


  const [count, setCount] = useState(1);



  const Increase = () => {
    setCount(count + 1);
  };

  

  const Decrease = () => {
   count > 1 ? setCount(count - 1 ) : setCount(count)
  };

  return (
    <>

      <div className="ADD-TO-CART-DIV">
        <CartAmount count={count} Increase={Increase} Decrease={Decrease} />

        <NavLink to="/Cart" onClick={()=>AddToCart(id,price,count,products)}>
          <button className='Add-To-Cart-btn'>ADD TO CART</button>
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
