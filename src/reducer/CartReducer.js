

const CartReducer = (state,action) => {
   
    if(action.type=== "ADD_TO_CART"){

        let {id,price,products} = action.payload;
        console.log(products);

        let cartItems;

         cartItems = {
           id,
           price,
           title : products.title,
           images : products.images[0],
           stock : products.stock,
        }

        return{
            ...state,
            Cart : [...state.Cart , cartItems],

        }

    }
    return state;
}

export default CartReducer