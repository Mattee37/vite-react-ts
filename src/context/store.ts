import { createContext } from "react";

import { Components } from "../types/types";

const initialState = {
  texto: "",
  adderValue: 0,
  key: 0,
};

const CounterContext = createContext<Components>(initialState);

export default CounterContext;
