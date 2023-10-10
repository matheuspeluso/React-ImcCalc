import "../components/Button.css"

import React from 'react'

const button = ({id,text,action}) => {

  const handleAtcion = (e)=>{ //deixando mais generico ainda fazendo com que o botão possa receber varias funções diferents
    action(e);
  }

  return (
    <button id={id} onClick={handleAtcion}>  {text}</button>
  )
}

export default button