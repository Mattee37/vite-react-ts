import React, { FC, useState } from "react";
import "./styles/App.css";

import Components from "./types/types";

import ComponenteHijo from "./components/ComponenteHijo";
import Encabezado from "./components/Encabezado";

import StyledButton from "./components/ui/StyledButton";
import Message from "./components/ui/Message";

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
