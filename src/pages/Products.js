import React from 'react';

import {GlobalFilterContext} from "../ContextAPI/Filter_context";

import Product from '../Component/Product';

//css

import "../CSS/Products.css"

const Products = () => {

  const {AllProducts} = GlobalFilterContext();

  return (
    <>
  <section id='allproducts'>

{AllProducts.map((product)=>{
  return <div className='product' key={product.id}>
       <Product product={product}  />
   </div>
})}

</section>
   

    </>
  )
}

export default Products