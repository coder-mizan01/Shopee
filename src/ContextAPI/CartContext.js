
import { createContext , useContext, useEffect, useReducer } from "react";


import reducer from "../reducer/CartReducer";

import { AddToCartContext } from "../Component/AddToCart";

const CartContext = createContext();

const initialState = {
    Cart : [],
    totalItem : '',
    totalAmount : '',
    shippingFee : '',
}


const CartContextprovider = ({children}) =>{

  const [state,dispatch] = useReducer(reducer,initialState);


  const {count} = useContext(AddToCartContext)

  const AddToCart = (id,price,products,count) =>{
     dispatch({type: "ADD_TO_CART",payload :{id,price,products,count}})
  }

    return <CartContext.Provider value={{...state,AddToCart}}>
          {children}
    </CartContext.Provider>
}


//global hook

const GlobalCartContext = () =>{
    return useContext(CartContext);
}
export {GlobalCartContext,CartContextprovider}