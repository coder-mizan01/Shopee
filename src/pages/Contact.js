import React from 'react'

import {GlobalContext} from "../ContextAPI/Context"


const Contact = () => {

  const {name} = GlobalContext();

  return (
    <div>{name}</div>
  )
}

export default Contact