import React from 'react';
import styled from "styled-components";
import { useState } from 'react';

const StylesHeader = styled.div`
  background-color: rgb(28, 222, 215);
  height: 90vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const FormCalculator = styled.form`
  background-color: rgb(235, 240, 240);
  width: 300px;
  border-radius: 12px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  font-size: 20px;
  input {
    margin: 10px;
    border-radius: 8px;
    padding: 12px;
  }
  button {
    padding: 4px;
    border-radius: 12px;
  }
`;

const ContainerPpl = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    h1 {
    margin-bottom: 18px;
  }
`;

const Main = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleWeightChange = ({ target: { value } }) => {
    setWeight(value);
  };

  const handleHeightChange = ({ target: { value } }) => {
    setHeight(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit")
    let imc = weight / (height * height)
    imc = Math.floor(imc * 10) / 10;


    if (imc < 18.5) {
      alert("Su IMC es ${imc}, lo que indica que su peso esta en la categoría de Bajo peso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos")
    } else if (imc >= 18.5 && imc <= 24.9) {

      alert(`Su IMC es ${imc}, lo que indica que su peso esta en la categoría de Peso saludable para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos. `)
    } else if (imc >= 25.0 && imc <= 29.9) {

      alert(`Su IMC es ${imc}, lo que indica que su peso esta en la categoría de Sobrepeso para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos`)
    } else if (imc >= 30) {

      alert(`Su IMC es ${imc}, lo que indica que su peso esta en la categoría de Obesidad para adultos de su estatura. El IMC es una medida de detección y no para diagnosticar enfermedades o padecimientos`)
    }

    setWeight("");
    setHeight("");
  }


  return (
    <>
      <StylesHeader>
      <ContainerPpl>
        <h3>Ingresa tu peso y estatura para calcular tu IMC</h3>
        <FormCalculator onSubmit={handleFormSubmit}>
          <label htmlFor="">
            Indicar Peso
            <input type="number" value={weight} onChange={handleWeightChange} />
          </label>
          <label htmlFor="">
            Indicar Altura
            <input type="number" value={height} onChange={handleHeightChange} />
          </label>
          <button type="submit">Confirmar</button>
        </FormCalculator>
      </ContainerPpl>
      </StylesHeader>
    </>
  );
};

export default Main;
