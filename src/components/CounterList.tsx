import React, { FC, useState } from "react";

import Counter from "./Counter";

import { Components } from "../types/types";

import Message from "./ui/Message";
import StyledButton from "./ui/StyledButton";

const CounterList: FC = () => {
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
  console.log(counter);
  console.log("App renderizada");

  return (
    <>
      <StyledButton onClick={addCounter}>Agregar contador!</StyledButton>
      {counter.length !== 0 ? (
        counter.map(({ texto, adderValue, key }) => (
          <Counter texto={texto} adderValue={adderValue} key={key} />
        ))
      ) : (
        <Message>Aún no hay contadores!</Message>
      )}
    </>
  );
};

export default React.memo(CounterList);
