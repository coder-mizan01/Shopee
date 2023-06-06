import React, { useEffect } from "react";
import { GlobalContext } from "../ContextAPI/Context";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
//Component
import MyImage from "../Component/MyImage";
import {AddToCart} from "../Component/AddToCart";
import Rating from "../Component/Rating";

//css
import "../CSS/SingleProduct.css";

const API = "https://dummyjson.com/products";
const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, SingleProduct } = GlobalContext();
  const {
    title,
    description,
    images,
    price,
    discountPercentage,
    rating,
    category,
    stock,
  } = SingleProduct;
  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  return (
    
    <section id="singleProduct">
      
      <div className="singleProduct-image-section">
        <MyImage imgs={images} />
      </div>

      <div className="singleProduct-data-section">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <Rating rating={rating} />
        <p className="discountPercentage">
          Deal of the day : {discountPercentage}% off
        </p>
        <p className="price">price : {price}TK</p>

        <span>category</span> : <NavLink to="" style={{ textDecoration: "underline" }}>
            {category}
        </NavLink>

        {stock <= 40 ? (
          <p>only {stock} cpoies in stocks</p>
        ) : (
          <p>{stock} copies in stock</p>
        )}

        {stock > 0 && <AddToCart products={SingleProduct} />}

      </div>
    </section>
  );
};

export default SingleProduct;
