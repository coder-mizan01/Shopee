import React from 'react'

//css
import "../CSS/Ordertrack.css"

const Ordertrack = () => {
  return (
    <>
     <section id='order-track'>

        <h2 className='order-track-title'>Track Your Order</h2>

        <div className='order-id-div'>
            <label htmlFor="">order ID</label>
            <input type="text" />
        </div>

        <div className='order-number-div'>
            <label htmlFor="">order Number</label>
            <input type="text" />
        </div>

        <a href='dsad' type='submit' className='order-track-button'>Track Order</a>
     </section>
    </>
  )
}

export default Ordertrack