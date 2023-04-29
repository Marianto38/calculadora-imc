import React from 'react';
import styled from "styled-components";

const StylesHeader = styled.div`
  background-color: rgb(156, 186, 185);
  height: 70px;
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <StylesHeader>
      <h2>Calculadora de Indice de Masa Corporal</h2>
    </StylesHeader>
  )
}

export default Header
