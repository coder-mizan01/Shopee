import React from 'react'
import "../CSS/Footer.css"

//icons
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
   <section id='footer'>
   <div className="grid-four-column">

     <div className="footer-about">
       <h3>Thapa Technical</h3>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
     </div>

     <div className="footer-subscribe">
       <h3>Subscribe to get important <br /> updates</h3>
       <form action="#">
         <input type="email" name="email" placeholder="YOUR E-MAIL" />
         <input type="submit" value="subscribe" />
       </form>
     </div>

     <div className="footer-social">
       <h3>Follow Us</h3>
       <div className="footer-social--icons">
         <div>
           <FaDiscord className="icons" />
         </div>
         <div>
           <FaInstagram className="icons" />
         </div>
         <div>
             <FaYoutube className="icons" />
         </div>
       </div>
     </div>

     <div className="footer-contact">
       <h3>Call Us</h3>
       <h3>+91 12345678978</h3>
     </div>
     
   </div>

   <div className="footer-bottom--section">
     <hr />
     <div className="container grid grid-two-column ">
       <p>
         @{new Date().getFullYear()} ThapaTechnical. All Rights Reserved
       </p>
       <div>
         <p>PRIVACY POLICY</p>
         <p>TERMS & CONDITIONS</p>
       </div>
     </div>
   </div>
 </section>
  )
}

export default Footer