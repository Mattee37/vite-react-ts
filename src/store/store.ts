import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { ActionTypes, ADD_COUNTER, DELETE_COUNTER } from "./actions";
import { Store, Component } from "../types";

// Standard interface and functions
const deleteCounter = (counters: Component[], id: number): Component[] =>
  counters.filter((counter) => counter.id !== id);

const addCounter = (counters: Component[]): Component[] => [
  ...counters,
  {
    texto: `Contador ${counters.length + 1}`,
    adderValue: Math.floor(Math.random() * (100 - 1)) + 1,
    id: Math.floor(Math.random() * (100000 - 1)) + 1,
  },
];

// Redux implementation
function todoReducer(
  state: Store = {
    counters: [],
  },
  action: ActionTypes
) {
  switch (action.type) {
    case DELETE_COUNTER:
      return {
        ...state,
        counters: deleteCounter(state.counters, action.payload),
      };
    case ADD_COUNTER:
      return {
        ...state,
        counters: addCounter(state.counters),
      };
    default:
      return state;
  }
}

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
