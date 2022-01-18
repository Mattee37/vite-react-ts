import type { Store } from '../../types'

import { ActionTypes, ADD_COUNTER, DELETE_COUNTER } from '../types'
import { addCounterAction, deleteCounterAction } from '../actions'

export function counterReducer(
  state: Store = {
    counters: []
  },
  action: ActionTypes
) {
  switch (action.type) {
    case DELETE_COUNTER:
      return {
        ...state,
        counters: deleteCounterAction(state.counters, action.payload)
      }
    case ADD_COUNTER:
      return {
        ...state,
        counters: addCounterAction(state.counters)
      }
    default:
      return state
  }
}
