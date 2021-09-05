import React, { FC } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Store } from "../types";
import { addCounter } from "../redux/actions";

import Counter from "./Counter";

import Message from "./ui/Message";
import StyledButton from "./ui/StyledButton";

const CounterList: FC = () => {
  const counters = useSelector((state: Store) => state.counters);
  const dispatch = useDispatch();
  console.log(counters);
  console.log("App renderizada");

  return (
    <>
      <StyledButton onClick={() => dispatch(addCounter())}>
        Agregar contador!
      </StyledButton>
      {counters.length !== 0 ? (
        counters.map(({ texto, adderValue, id }) => (
          <Counter texto={texto} adderValue={adderValue} id={id} key={id} />
        ))
      ) : (
        <Message>Aún no hay contadores!</Message>
      )}
    </>
  );
};

export default React.memo(CounterList);
