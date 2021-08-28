import React, { FC } from "react";
import "./styles/App.css";

import CounterProvider from "./context/CounterContext";

import Header from "./components/Header";
import CounterList from "./components/CounterList";

const App: FC = () => {
  console.log("App renderizada");

  return (
    <CounterProvider>
      <div className="grid">
        <Header />
        <CounterList />
      </div>
    </CounterProvider>
  );
};

export default App;
