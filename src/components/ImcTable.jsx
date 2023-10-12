import React from 'react'
import Button from "./Button.jsx"

const ImcTable = ({data}) => {
  return (
    <div id='result-container'>
      <p id="imc-number">
        Seu Imc: 
      </p>
      <p id="imc-info">
        Situação atual:
      </p>
      <h3>Confira as classificações:</h3>
      <div id="imc-table">
        <div id="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
          {data.map((item)=> (
            <div className="table-data" key={item.info}>
              <p>{item.classification}</p>
              <p>{item.info}</p>
              <p>{item.obesity}</p>
            </div>
          ))}
        </div>
        <Button id={"back-btn"} text={"Voltar"}/>
      </div>
    </div>
  )
}

export default ImcTable