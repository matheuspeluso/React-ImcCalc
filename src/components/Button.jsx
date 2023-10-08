import "../components/Button.css"

import React from 'react'

const button = ({id,text}) => {
  return (
    <button id={id}>{text}</button>
  )
}

export default button