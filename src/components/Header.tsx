import React, { FC, lazy, Suspense } from "react";

const ReactLogo = lazy(() => import("./ui/svg/ReactLogo"));

const Header: FC = () => {
  console.log("Encabezado Renderizado");
  return (
    <div className="encabezado">
      <Suspense fallback={<div>Loading Image...</div>}>
        <ReactLogo className="App-logo" />
      </Suspense>
      <h1 className="headerText">Contadores!</h1>
    </div>
  );
};

export default React.memo(Header);
