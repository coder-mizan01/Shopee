

const filterReducer = (state,action) => {

    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return {
                ...state,
                filterProducts : [...action.payload],
                AllProducts : [...action.payload]
            }
    
        default:
            return state;
    }

}

export default filterReducer