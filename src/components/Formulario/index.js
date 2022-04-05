import React, { useState, useEffect } from "react";
import { InputSubmit, Flex } from "./Styles";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import Error from "../Error.js";

const Formulario = ({ setMonedas }) => {
  const monedas = [
    { id: "USD", nombre: "Dolar de Estados Unidos" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra Esterlina" }
  ];

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const { state, SelectMonedas } = useSelectMonedas("Elige tu moneda", monedas);
  const {
    state: criptomoneda,
    SelectMonedas: SelectCriptomoneda
  } = useSelectMonedas("Elige tu criptomoneda", criptos);

  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        };

        return objeto;
      });

      setCriptos(arrayCriptos);
    };

    consultarApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([state, criptomoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      state,
      criptomoneda
    });
  };

  return (
    <>
      {error && <Error> Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <Flex>
          <SelectMonedas />
          <SelectCriptomoneda />


          <InputSubmit type="submit" value="cotizar" />
        </Flex>
      </form>
    </>
  );
};

export default Formulario;
