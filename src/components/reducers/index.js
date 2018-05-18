import { combineReducers } from 'redux'
import creator from './creator'
import add_input from './add-input'
import terminal from './terminal'
import prompt_code from './prompt-code'

const AppReducer = combineReducers({
  creator,
  add_input,
  terminal,
  prompt_code
})

export default AppReducer;