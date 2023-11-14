 
  import { configureStore  } from "@reduxjs/toolkit";


  //authentication file 
  import Authentication from "./Redux/Authentication";

  //product file
  import AllProduct from "./Redux/AllProducts";

  //single product
  import SingleProduct from "./Redux/SingleProduct";

  //cart Item
  import CartItem from "./Redux/CartItem";
import ProductQuantityReducer from "./Redux/ProductQuantityReducer";
import FilterProduct from "./Redux/FilterProduct";


  const store = configureStore({
    reducer: {
      authentication: Authentication,
      allproduct: AllProduct,
      singleproduct : SingleProduct,
      cart : CartItem,
      productquantitycounter : ProductQuantityReducer,
      filterproduct : FilterProduct
    },
  });

  export default store