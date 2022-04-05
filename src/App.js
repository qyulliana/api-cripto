import React, {useState, useEffect} from 'react';
import "./styles.css";
import Heading from './components'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner.js'

export default function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(
    () => {
      if(Object.keys(monedas).length > 0){
        const cotizarCripto= async () => {
          setCargando(true)
          setResultado({})
          const {state, criptomoneda} = monedas
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${state}`
          const respuesta= await fetch(url)
          const resultado= await respuesta.json()
          setResultado(resultado.DISPLAY[criptomoneda][state])
          setCargando(false)
        }
        cotizarCripto();
      }
    }, [monedas]
  )

  return (
    <div className="App">
      <Heading/>
      <Formulario setMonedas={setMonedas}/>

      {cargando && <Spinner/>}
      {resultado.PRICE && <Resultado resultado={resultado}/>}
    </div>
  );
}

