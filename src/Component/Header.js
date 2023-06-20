import React, { useState } from "react";
import "../CSS/Header.css";

//packasges
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiXCircle } from "react-icons/fi"
import {BsCart4} from "react-icons/bs"


const Header = () => {
 const [ showMediaIcon ,  setshowMediaIcon] = useState(false)
  return (
    <nav className="main-nav">
      {/* logo image */}
      <div className="logo">
         <NavLink to='/'>
            <h2>SHOPEE</h2>
         </NavLink>
      </div>

      <div className="hamburger-menu">

        {showMediaIcon ? <FiXCircle className="icon" onClick={()=>setshowMediaIcon(!showMediaIcon)} /> :<AiOutlineMenu className="icon" onClick={()=>setshowMediaIcon(!showMediaIcon)}/>  }
        
          
      </div>

      {/* menu part */}
      <div className={showMediaIcon ? "menu-link mobile-menu-link" : "menu-link" } >
         <ul>
           <li><NavLink to='/'>Home</NavLink></li>
           <li><NavLink to='/Products'>Products</NavLink></li>
           <li><NavLink to='/Contact'>Contact</NavLink></li>
           <li><NavLink to='/OrderTrack' >OrderTrack</NavLink></li>
           <li><NavLink to='/Cart' className='random'>
            <BsCart4 className="cart" />
           <span className="cart-trolley">5</span>
           </NavLink></li>
         
         </ul>

      </div>



    </nav>
  );
};

export default Header;
