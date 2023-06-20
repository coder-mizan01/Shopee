import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./CSS/index.css";


import { Contextfun } from "./ContextAPI/Context";
import { FilterContextProvider } from "./ContextAPI/Filter_context";
import { CartContextprovider } from "./ContextAPI/CartContext";
import { Countprovider } from "./Component/AddToCart";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Contextfun>
      <FilterContextProvider>
        <CartContextprovider>
        <App />
        </CartContextprovider >
      </FilterContextProvider>
    </Contextfun>
  </>
);
