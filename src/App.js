import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Contact from "./pages/Contact.js";
import Cart from "./pages/Cart.js";
import OrderTrack from "./pages/OrderTrack";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct"



//componet 
import Header from "./Component/Header.js"
import Footer from "./Component/Footer";

function App() {
  return (
  <>
  <BrowserRouter>
  <Header />
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/Products" element={<Products />} />
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/OrderTrack" element={<OrderTrack />} />
       <Route path="/SingleProduct/:id" element={<SingleProduct />} />
       <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  </>
  );
}

export default App;
