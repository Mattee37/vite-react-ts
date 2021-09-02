import React, { FC, useState } from "react";

import { Component } from "../types";

import { useDispatch } from "react-redux";
import { deleteCounter } from "../store/actions";

const Counter: FC<Component> = ({ texto, adderValue, id }) => {
  const dispatch = useDispatch();

  console.log(`${texto} Renderizado`);
  const [state, setState] = useState<number>(0);

  return (
    <div className="caja">
      <p>{texto}</p>
      <h1>{state}</h1>
      <button
        className="boton botonAdd"
        onClick={() => setState(state + adderValue)}
      >
        +{adderValue}
      </button>
      <button
        className="boton botonRemove"
        onClick={() => dispatch(deleteCounter(id))}
      >
        Eliminar
      </button>
    </div>
  );
};

export default React.memo(Counter);
