import type { Store } from '../../types'

import { ActionTypes, ADD_COUNTER, DELETE_COUNTER, ADD_VALUE } from '../types'
import {
  addCounterAction,
  deleteCounterAction,
  addValueAction
} from '../actions'

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
    case ADD_VALUE:
      return {
        ...state,
        counters: addValueAction(state.counters, action.payload)
      }
    default:
      return state
  }
}
