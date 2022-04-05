import styled from "styled-components";

const Contenedor = styled.div`
  color: #fff;
  margin-top: 30px;
`;

const Parrafo = styled.p`
  font-size: 20px;

  span {
    color: red;
    font-weight: 700;
  }
`;

const Info = styled.p`
  font-size: 18px;
  span {
    color: red;
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;

  return (
    <Contenedor>
      <Parrafo>
        El precio es de: <span>{PRICE}</span>{" "}
      </Parrafo>
      <Info>
        Precio mas alto del dia: <span>{HIGHDAY}</span>{" "}
      </Info>
      <Info>
        Precio mas bajo del dia: <span>{LOWDAY}</span>{" "}
      </Info>
      <Info>
        Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>{" "}
      </Info>
      <Info>
        Ultima actualizacion: <span>{LASTUPDATE}</span>{" "}
      </Info>
    </Contenedor>
  );
};

export default Resultado;
