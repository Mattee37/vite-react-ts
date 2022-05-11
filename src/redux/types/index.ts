export const ADD_COUNTER = 'ADD_COUNTER'
export const DELETE_COUNTER = 'DELETE_COUNTER'
export const ADD_VALUE = 'ADD_VALUE'

export type ActionTypes =
  | { type: typeof ADD_COUNTER }
  | { type: typeof DELETE_COUNTER; payload: number }
  | { type: typeof ADD_VALUE; payload: number }
