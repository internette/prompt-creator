import { combineReducers } from 'redux'
import creator from './creator'
import add_input from './add-input'

const AppReducer = combineReducers({
  creator,
  add_input
})

export default AppReducer;