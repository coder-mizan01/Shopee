import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalContext } from "./Context";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts : [],
    AllProducts : [],
}

const FilterContextProvider = ({children}) =>{
    const {allProducts} = GlobalContext();
    const [state,dispatch] = useReducer(reducer,initialState);

     useEffect(()=>{
        dispatch({type:'GET_ALL_PRODUCTS',payload:allProducts});
     },[allProducts])
    return <FilterContext.Provider value={{...state}}>
            {children}
    </FilterContext.Provider>
}

//custom hook

const GlobalFilterContext = () =>{
   return useContext(FilterContext)
}

export {FilterContextProvider,GlobalFilterContext}