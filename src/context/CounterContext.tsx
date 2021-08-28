import React, { useState, useContext } from "react";

import { Components, Props } from "../types/types";

import CounterContext from "./store";

const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState<Array<Components>>([]);

  const addCounter = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    const arrayLength = counter.length + 1;
    setCounter(
      counter.concat({
        texto: `Contador ${arrayLength}`,
        adderValue: randomNumber,
        key: arrayLength,
      })
    );
  };

  const deleteCounter = () => {
    setCounter(counter.splice(2, 1));
    console.log("Borrando");
  };

  return (
    <CounterContext.Provider
      value={{
        counter,
        addCounter,
        deleteCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
