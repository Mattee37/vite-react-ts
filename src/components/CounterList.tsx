import React, { FC, useContext } from "react";

import CounterContext from "../context/store";

import Counter from "./Counter";

import Message from "./ui/Message";
import StyledButton from "./ui/StyledButton";

const CounterList: FC = () => {
  const { counter, addCounter } = useContext(CounterContext);
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
