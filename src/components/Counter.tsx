import React, { FC, useState } from "react";

import { Components } from "../types/types";

const Counter: FC<Components> = ({ texto, adderValue }) => {
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
        onClick={() => console.log("Elinimando...")}
      >
        Eliminar
      </button>
    </div>
  );
};

export default React.memo(Counter);
