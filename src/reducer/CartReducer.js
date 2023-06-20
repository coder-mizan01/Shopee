

const CartReducer = (state,action) => {
   
    if(action.type=== "ADD_TO_CART"){

        let {id,price,products,count} = action.payload;

        let cartItems;

         cartItems = {
           id,
           price,
           count,
           title : products.title,
           images : products.images[0],
           stock : products.stock,
        }

        return{
            ...state,
            Cart : [...state.Cart , cartItems],

        }

    }

    if(action.type==="REMOVED_CART_ITEM"){
        let updatedCart = state.Cart.filter((curItem)=>{
            return curItem.id !== action.payload;
        })
        return{
            ...state,
            Cart : updatedCart,
        }
    }

    return state;
}

export default CartReducer