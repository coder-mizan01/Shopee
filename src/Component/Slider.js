import React from "react";

//css
import "../CSS/Slide.css";
import { NavLink } from "react-router-dom"

//Packages

const Slider = () => {
  return (
    <>
      <section id="slider">
        <div className="container">
          <div className="title-element">
            <h2>Shopee E-commerce</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              perspiciatis ad sit rerum est optio ipsum esse vitae. Doloremque 
              recusandae ipsa consequatur vero similique magni ut beatae  Doloremque
              recusandae ipsa consequatur vero similique magni ut beatae  Doloremque
              laboriosam quidem error!
            </p>
             <NavLink to='/Products'>
            <button className="slider-btn">Shop Now</button>
            </NavLink>
          </div>

          <div className="image-elemnt">
            
            <img src="pandamart.jpg" alt="" /> 

          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
