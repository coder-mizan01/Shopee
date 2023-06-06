import React from 'react'

//dsadas
import { GlobalContext } from '../ContextAPI/Context';

//Component
import Product from './Product';

//css
import "../CSS/HomePageProducts.css"

const HomePageProducts = () => {
  const {isLoading , HomeProducts} = GlobalContext();

  

  return (
    <>
   {isLoading && <div>...Loading</div>}
   <section id='HomeProducts'>

    {HomeProducts.map((product)=>{
      return <div className='product' key={product.id}>
           <Product product={product}  />
       </div>
    })}

   </section>
   
    </>
  )
}

export default HomePageProducts