import React from "react";
import { NavLink } from "react-router-dom";

//css
import "../CSS/Product.css"

const Product = ({ product }) => {
  const {
    id,
    title,
    images,
    price,
    thumbnail,
    rating,
    brand,
  
    
    
  } = product;



  return (
    <>
     <NavLink className='product-navlink' to={`/singleproduct/${id}`}>
        <div className="first-part">
          <img src={images[0]} alt={thumbnail} /> 
          <h3>{title}</h3>
        </div>

        <div className="second-part">
           <p>Brand : {brand}</p> 
           <p>Rating : {rating}</p>  
           <p>Price : {price}</p>
       
        </div>
     </NavLink>

     <NavLink to='/Cart' className='Add-To-Cart-Link'>
           <button>Add To Cart</button>
       </NavLink>
    </>
  );
};

export default Product;
