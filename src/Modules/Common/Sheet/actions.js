import * as actionTypes from './actionTypes'

export const editCell = (index, value) => ({
  type: actionTypes.EDIT_CELL,
  payload: { index, value }
})
