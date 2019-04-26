import { combineReducers } from 'redux-immutable'
import { reducer as Sheet } from './Common/Sheet/reducer'

const rootReducer = combineReducers({
  Sheet
})

export default rootReducer
