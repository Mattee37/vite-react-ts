import React, { FC, useState } from "react";

interface Props {
  texto: string;
  adderValue?: number;
}

const ComponenteHijo: FC<Props> = ({ texto, adderValue = 1 }) => {
  console.log(`${texto} Renderizado`);

  const [state, setState] = useState<number>(0);

  return (
    <div className="caja">
      <p>{texto}</p>
      <h1>{state}</h1>
      <button className="boton" onClick={() => setState(state + adderValue)}>
        +{adderValue}
      </button>
    </div>
  );
};

export default React.memo(ComponenteHijo);
