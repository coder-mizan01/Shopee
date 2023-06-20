import React from 'react';

import {GlobalFilterContext} from "../ContextAPI/Filter_context";

import Product from '../Component/Product';

//css

import "../CSS/Products.css"

const Products = () => {

  const {filterProducts,Sorting} = GlobalFilterContext();

  return (
    <>
      <form action="#">
      <label htmlFor="sort"></label>
      <select name="sort" id="sort" onClick={Sorting} >
         <option value="lowest">Price (lowest)</option>
         <option value="highest">Price (Highest)</option>
         <option value="a-z">Price (A - Z)</option>
         <option value="z-a">Price (Z - A)</option>
      </select>
    </form>
  <section id='allproducts'>

 {filterProducts.map((product)=>{
  return <div className='product' key={product.id}>
       <Product product={product}  />
   </div>
})}

</section>
   

    </>
  )
}

export default Products