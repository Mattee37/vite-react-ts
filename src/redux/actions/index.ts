import { DELETE_COUNTER, ADD_COUNTER, ActionTypes } from "../types";
import { Component } from "../../types";

export const addCounter = (): ActionTypes => ({ type: ADD_COUNTER });

export const addCounterAction = (counters: Component[]): Component[] => [
  ...counters,
  {
    texto: `Contador ${counters.length + 1}`,
    adderValue: Math.floor(Math.random() * (100 - 1)) + 1,
    id: Math.floor(Math.random() * (100000 - 1)) + 1,
  },
];

export const deleteCounter = (id: number): ActionTypes => ({
  type: DELETE_COUNTER,
  payload: id,
});

export const deleteCounterAction = (
  counters: Component[],
  id: number
): Component[] => counters.filter((counter) => counter.id !== id);
