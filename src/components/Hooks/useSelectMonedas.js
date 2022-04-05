import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  color: white;
  display: block;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 20%;
  font-size: 18px;
  border-radius: 4px;
  margin-bottom: 20px;

  @media (max-width: 924px) {
    width: 20%;
    font-size: 14px;
    padding: 6px;
    
    
  }
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");
  const SelectMonedas = () => {
    return (
      <>
        <Label>{label}</Label>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Seleccione</option>
          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </>
    );
  };

  return {
    state,
    SelectMonedas
  };
};

export default useSelectMonedas;
