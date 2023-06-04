import React, { useEffect, useReducer } from "react";
import { createContext , useContext } from "react";

//packages 
import axios from "axios";

//reducer
import reducer from "../reducer/reducer";

const ContextApi = createContext();
//const API = 'https://api.pujakaitem.com/api/products';

//const API = 'https://fakestoreapi.com/products'

const API = 'https://dummyjson.com/products';

const initialState = {
  isLoading : false,
  isError : false,
  HomeProducts : [],
  allProducts : [],
  SingleProduct : {},

}


const Contextfun = ({ children }) => {

  const [state,dispatch] = useReducer(reducer, initialState)
  
  const getProducts = async (url) =>{
    dispatch({type : 'API_LOADING'});
    try{
      const res = await axios.get(url);
      const apiData = await res.data;
      const products = await apiData.products;
      dispatch({type : "ADD_PRODUCTS" , payload : products})

 
    }catch(err){
         dispatch({type : 'API_ERROR'})
    }
  }

  //my 2nd API call fro single product
  const getSingleProduct = async (url)=>{
   
   dispatch({ type: "SINGLE_PAGE_LOADING" });
      try{
      const res = await axios.get(url);
      const apiData = await res.data;
     // const products = await apiData.products;
      dispatch({type : "SINGLE_PAGE_PRODUCT" , payload : apiData})
    }catch(err){
       dispatch({type : "SINGLE_PAGE_ERROR"})
       
     }
     
  }
   useEffect(()=>{
        getProducts(API);
        

   },[])

  return <ContextApi.Provider value={{...state,getSingleProduct}}>
    {children}
  </ContextApi.Provider>;
};

//custom hook

const GlobalContext = () =>{
    return useContext(ContextApi)
}



export { Contextfun , ContextApi , GlobalContext};
