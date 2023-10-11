import { useState } from "react"
import "../components/ImcCalc.css"
import Button from "./Button.jsx"

const imcCalc = ({calcImc}) => {
    const [height,setHeight] = useState("");
    const [weight,setWeight] = useState("");

    const clearForm = (e)=>{
        e.preventDefault();
        setWeight("")
        setHeight("")
    }

    // função para apenas receber numeros e virgulas

    const validDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "")
    }
    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue);
    }

    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Ex 1,75"
                        onChange={(e)=> handleHeightChange(e)}
                        value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Ex 70,5"
                        onChange={(e)=> handleWeightChange(e)}
                        value={weight}
                        />
                    </div>
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={calcImc}/>
                    <Button id="clear-btn" text="Limpar" action={clearForm}/> {/*adicionamos a função por meio de props */}
                </div>
            </form>
        </div>
      )
}

export default imcCalc