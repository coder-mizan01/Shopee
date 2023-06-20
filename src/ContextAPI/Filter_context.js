import { createContext, useContext, useEffect, useReducer } from "react";
import { GlobalContext } from "./Context";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const initialState = {
    filterProducts : [],
    AllProducts : [],
    sortingValue : 'lowest',
}

const FilterContextProvider = ({children}) =>{

    const {allProducts} = GlobalContext();
    const [state,dispatch] = useReducer(reducer,initialState);

    const Sorting = (event) =>{
      let userValue = event.target.value;
       dispatch({type:"SET_SORT_FUN",payload:userValue});
    }

    useEffect(()=>{
      dispatch({type : "SORT_PRODUCTS",payload:allProducts})
    },[state.sortingValue,allProducts])

     useEffect(()=>{
        dispatch({type:'GET_ALL_PRODUCTS',payload:allProducts});
     },[allProducts])

    return <FilterContext.Provider value={{...state,Sorting}}>
            {children}
    </FilterContext.Provider>
}

//custom hook

const GlobalFilterContext = () =>{
   return useContext(FilterContext)
}

export {FilterContextProvider,GlobalFilterContext}