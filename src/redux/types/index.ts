export const ADD_COUNTER = 'ADD_COUNTER'
export const DELETE_COUNTER = 'DELETE_COUNTER'

export type ActionTypes =
  | { type: typeof ADD_COUNTER }
  | { type: typeof DELETE_COUNTER; payload: number }
