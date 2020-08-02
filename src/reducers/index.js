import { combineReducers } from 'redux'
import partReducer from './partReducer'

export default combineReducers({
  part: partReducer,
})