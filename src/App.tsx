import React, { FC } from "react";
import "./styles/App.css";

import Header from "./components/Header";
import CounterList from "./components/CounterList";

const App: FC = () => {
  console.log("App renderizada");

  return (
    <div className="grid">
      <Header />
      <CounterList />
    </div>
  );
};

export default App;
