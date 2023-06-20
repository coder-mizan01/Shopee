

const filterReducer = (state,action) => {

    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                filterProducts : [...action.payload],
                AllProducts : [...action.payload]
            }
        
        case "SET_SORT_FUN" : 

           let sortValue = action.payload;
           console.log(sortValue);
        return{
            ...state,
            sortingValue : sortValue,
        }    

        case "SORT_PRODUCTS" :
            let newSortData;
            const {filterProducts,sortingValue} = state;
            let tempSortProduct = [...filterProducts];


            const sortingProducts = (a, b) => {
                if (sortingValue === "lowest") {
                  
                  return a.price - b.price;
                }
        
                if (sortingValue === "highest") {
              
                  return b.price - a.price;
                }
        
                /*if (sortingValue === "a-z") {
                  return a.name.localeCompare(b.name);
                }
        
                if (sortingValue === "z-a") {
                  return b.name.localeCompare(a.name);
                }*/
              };
        
              newSortData = tempSortProduct.sort(sortingProducts);

          return{
            ...state,
            filterProducts : newSortData,
          }
    
        default:
            return state;
    }

}

export default filterReducer