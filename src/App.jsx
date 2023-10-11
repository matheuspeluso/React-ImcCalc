import {data} from "./data/data.js"

import { useState } from 'react'

import ImcCalc from './components/imcCalc'
import ImcTable from "./components/ImcTable.jsx";

import './App.css'

function App() {

  const calcImc = (e, height, weight) =>{
    e.preventDefault();
    console.log("Executou!")

    console.log(height,weight)
    if (!height || !weight)return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    setImc(imcResult);
    
  }

  const [imc,setImc] = useState("");
  const [info,setInfo] = useState("");
  const [infoClass,setInfoClass] = useState("");

  return (
    <div className='container'>
      {!imc ?(
        <ImcCalc calcImc={calcImc}/>
      ) :(
        <ImcTable/>
      ) }
     
    </div>
  )
}

export default App
