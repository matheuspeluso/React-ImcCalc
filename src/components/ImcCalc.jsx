import "../components/ImcCalc.css"

const imcCalc = () => {
    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-controls">
                        <label htmlFor="height">Altura:</label>
                        <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Ex 1,75"
                        />
                    </div>
                    <div className="form-controls">
                        <label htmlFor="weight">Peso:</label>
                        <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Ex 70,5"
                        />
                    </div>
                </div>

                <div className="action-control">
                    <button>Calcular</button>
                    <button>Limpar</button>
                </div>
            </form>
        </div>
      )
}

export default imcCalc