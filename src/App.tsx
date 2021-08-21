import React, { FC } from "react";
import "./App.css";

import ComponenteHijo from "./components/ComponenteHijo";
import Encabezado from "./components/Encabezado";

interface InitialComponents {
  texto: string;
  adderValue: number;
  key: number;
}

const App: FC = () => {
  console.log("App renderizada");

  const initialComponents: Array<InitialComponents> = [
    { texto: "Contador 1", adderValue: 1, key: 1 },
    { texto: "Contador 2", adderValue: 2, key: 2 },
    { texto: "Contador 3", adderValue: 3, key: 3 },
  ];

  const addComponent = () => {
    console.log("agregado");
    initialComponents.push({ texto: "TEST", adderValue: 1, key: 100 });
  };

  return (
    <div className="grid">
      <button onClick={addComponent}>Agregar componente!</button>
      <Encabezado />
      {initialComponents.map(({ texto, adderValue, key }) => (
        <ComponenteHijo texto={texto} adderValue={adderValue} key={key} />
      ))}
    </div>
  );
};

export default App;
