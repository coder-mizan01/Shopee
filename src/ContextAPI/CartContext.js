
import { createContext , useContext, useReducer } from "react";


import reducer from "../reducer/CartReducer";


const CartContext = createContext();

const initialState = {
    Cart : [],
    totalItem : '',
    totalAmount : '',
    shippingFee : '',
}


const CartContextprovider = ({children}) =>{

  const [state,dispatch] = useReducer(reducer,initialState);

  const AddToCart = (id,price,count,products,) =>{
     dispatch({type: "ADD_TO_CART",payload :{id,price,count,products}})
  }

  const RemovedCartItem = (id) =>{
     dispatch({type:"REMOVED_CART_ITEM",payload:id})
  }

    return <CartContext.Provider value={{...state,AddToCart,RemovedCartItem}}>
          {children}
    </CartContext.Provider>
}


//global hook

const GlobalCartContext = () =>{
    return useContext(CartContext);
}
export {GlobalCartContext,CartContextprovider}