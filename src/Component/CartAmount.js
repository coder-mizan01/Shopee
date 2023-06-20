import React from 'react'


//icons
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmount = ({count,Increase,Decrease}) => {
  return (
    <>
        <div className="quantity">
          <FaPlus onClick={Increase} className="Increase" />
          <p>{count}</p> 
          <FaMinus onClick={Decrease}  className="Decrease" />
        </div>
    </>
  )
}

export default CartAmount