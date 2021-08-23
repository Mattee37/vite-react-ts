import React, { FC, useState } from "react";

interface Props {
  texto: string;
  adderValue: number;
}

const ComponenteHijo: FC<Props> = ({ texto, adderValue }) => {
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
        onClick={() => console.log("Borrar Contador")}
      >
        Eliminar
      </button>
    </div>
  );
};

export default React.memo(ComponenteHijo);
