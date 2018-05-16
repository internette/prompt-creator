import { combineReducers } from 'redux'
import creator from './creator'
import add_input from './add-input'
import terminal from './terminal'

const AppReducer = combineReducers({
  creator,
  add_input,
  terminal
})

export default AppReducer;