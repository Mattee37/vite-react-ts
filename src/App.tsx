import React, { FC, useState } from "react";
import "./App.css";

import ComponenteHijo from "./components/ComponenteHijo";
import Encabezado from "./components/Encabezado";

interface Components {
  texto: string;
  adderValue: number;
  key: number;
}

const App: FC = () => {
  console.log("App renderizada");

  const [components, setComponents] = useState<Array<Components>>([
    { texto: "Contador 1", adderValue: 1, key: 1 },
    { texto: "Contador 2", adderValue: 2, key: 2 },
    { texto: "Contador 3", adderValue: 3, key: 3 },
  ]);

  const addComponent = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    setComponents(
      components.concat({
        texto: "Contador " + randomNumber,
        adderValue: randomNumber,
        key: randomNumber + randomNumber,
      })
    );
    console.log(components);
  };

  return (
    <div className="grid">
      <Encabezado />
      <button onClick={addComponent}>Agregar componente!</button>
      {components.map(({ texto, adderValue, key }) => (
        <ComponenteHijo texto={texto} adderValue={adderValue} key={key} />
      ))}
    </div>
  );
};

export default App;
