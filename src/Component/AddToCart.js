import React, { useState,createContext, useContext } from "react";
import { NavLink } from "react-router-dom";


//components

//icons
import { FaMinus, FaPlus } from "react-icons/fa";

//css
import "../CSS/AddToCart.css"
//cartContext
import { GlobalCartContext } from "../ContextAPI/CartContext";

const AddToCartContext = createContext();

const Countprovider = ({children,count}) =>{
   console.log(count);
  return <AddToCartContext.Provider value={{count}}>
   {children}
  </AddToCartContext.Provider>
}



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
       <Countprovider count={count} />
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

export {AddToCart,Countprovider,AddToCartContext};
