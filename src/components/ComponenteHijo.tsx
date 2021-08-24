import React, { FC, useState } from "react";

interface Props {
  texto: string;
  adderValue: number;
  key: number;
  id: number;
}

const deleteComponent = (id: number): void => {
  console.log(`Componente ${id} eliminado... o no`);
};

const ComponenteHijo: FC<Props> = ({ texto, adderValue, id }) => {
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
      <button className="boton botonRemove" onClick={() => deleteComponent(id)}>
        Eliminar
      </button>
    </div>
  );
};

export default React.memo(ComponenteHijo);
