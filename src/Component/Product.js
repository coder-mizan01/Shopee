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
    thumbnail
    
  } = product;



  return (
    <>
     <NavLink className='product-navlink' to={`/singleproduct/${id}`}>
        <div className="first-part">
          <img src={images[0]} alt={thumbnail} /> 
        </div>

        <div className="second-part">
           <h3>{title}</h3>
           <p>{price}</p> 
        </div>
     </NavLink>
    </>
  );
};

export default Product;
