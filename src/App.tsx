import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import "./App.css";

import ComponenteHijo from "./components/ComponenteHijo";
import Encabezado from "./components/Encabezado";

interface Components {
  texto: string;
  adderValue: number;
  key: number;
  id: number;
}

const StyledButton = styled.button`
  grid-column: span 3;
  width: 31.6%;
  align-self: center;
  justify-self: center;
  background: rgb(5, 36, 214);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px;
  transition: 0.3s ease all;

  &:hover {
    background: rgb(0, 18, 119);
  }
`;

const Message = styled.span`
  font-size: 30px;
  grid-column: span 3;
  align-self: center;
  justify-self: center;
`;

const App: FC = () => {
  console.log("App renderizada");

  const [components, setComponents] = useState<Array<Components>>([]);

  const addComponent = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const arrayLength = components.length + 1;
    setComponents(
      components.concat({
        texto: `Contador ${arrayLength}`,
        adderValue: randomNumber,
        key: arrayLength,
        id: arrayLength,
      })
    );
  };

  return (
    <div className="grid">
      <Encabezado />
      <StyledButton onClick={addComponent}>Agregar contador!</StyledButton>
      {components.length !== 0 ? (
        components.map(({ texto, adderValue, key }) => (
          <ComponenteHijo
            texto={texto}
            adderValue={adderValue}
            key={key}
            id={key}
          />
        ))
      ) : (
        <Message>Aún no hay contadores!</Message>
      )}
    </div>
  );
};

export default App;
