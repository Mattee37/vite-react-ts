import type { Component } from '../../types'

import { ActionTypes, ADD_COUNTER, ADD_VALUE, DELETE_COUNTER } from '../types'

export const addCounter = (): ActionTypes => ({ type: ADD_COUNTER })

export const addCounterAction = (counters: Component[]): Component[] => [
  ...counters,
  {
    text: `Counter ${counters.length + 1}`,
    value: 0,
    id: Math.floor(Math.random() * (100000 - 1)) + 1
  }
]

export const deleteCounter = (id: number): ActionTypes => ({
  type: DELETE_COUNTER,
  payload: id
})

export const deleteCounterAction = (
  counters: Component[],
  id: number
): Component[] => counters.filter((counter) => counter.id !== id)

export const addValue = (id: number): ActionTypes => ({
  type: ADD_VALUE,
  payload: id
})

export const addValueAction = (
  counters: Component[],
  id: number
): Component[] =>
  counters.map((counter) => {
    if (counter.id === id) {
      counter.value++
    }

    return counter
  })
