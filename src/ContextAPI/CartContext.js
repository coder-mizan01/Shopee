
import { createContext , useContext, useReducer } from "react";

import reducer from "../reducer/CartReducer"

const CartContext = createContext();

const initialState = {
    Cart : [],
    totalItem : '',
    totalAmount : '',
    shippingFee : '',
}


const CartContextprovider = ({children}) =>{

  const [state,dispatch] = useReducer(reducer,initialState);

  const AddToCart = (id,price,products) =>{
     dispatch({type: "ADD_TO_CART",payload :{id,price,products}})
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