import React, { FC } from "react";
import "./App.css";

import ComponenteHijo from "./components/ComponenteHijo";
import Encabezado from "./components/Encabezado";

const App: FC = () => {
  console.log("App renderizada");
  return (
    <div className="grid">
      <Encabezado />
      <ComponenteHijo texto={"Contador 1"} />
      <ComponenteHijo texto={"Contador 2"} adderValue={2} />
      <ComponenteHijo texto={"Contador 3"} adderValue={3} />
    </div>
  );
};

export default App;
