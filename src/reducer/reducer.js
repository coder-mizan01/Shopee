

const reducer = (state,action) => {

   switch (action.type) {
    case "API_LOADING": 
      return{
        ...state,
        isLoading : true,
      }
        
    case "API_ERROR":
        return {
            ...state,
            isError : true
        }
    case "ADD_PRODUCTS":
      const HomeProducts = action.payload;

        return {
            ...state,
            isLoading : false,
            isError : false,
            HomeProducts : HomeProducts,
            allProducts : action.payload,
        }

        case "SINGLE_PAGE_LOADING":
          return {
            ...state,
            isSingleLoading: true,
          };
  

          case "SINGLE_PAGE_PRODUCT":
            return{
              ...state,
              SingleProduct : action.payload,
              isSingleLoading : false,
            };

            
          case "SINGLE_PAGE_ERROR":
            return {
              ...state,
              isSingleLoading: false,
              isSingleError: true,
            };
 
    default:
        return state;
   }

 
}

export default reducer;