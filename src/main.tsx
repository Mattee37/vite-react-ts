import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <PropagateLoader color={"#3c1fdf"} loading={true} css={""} size={15} />
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
