import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const cellsSeed = amount => {
  return Array(amount)
    .fill(null)
    .map((c, i) => `Cell ${i}`)
}

export const initialState = fromJS({
  cells: cellsSeed(1000000),
  editing: null
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_CELL:
      return state.setIn(['cells', action.payload.index], action.payload.value)
    default:
      return state
  }
}
