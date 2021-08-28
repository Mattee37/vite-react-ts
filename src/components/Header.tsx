import React, { FC, useContext } from "react";
import logo from "../assets/logo.svg";

const Header: FC = () => {
  console.log("Encabezado Renderizado");
  return (
    <div className="encabezado">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <h1>Contadores</h1>
    </div>
  );
};

export default React.memo(Header);
