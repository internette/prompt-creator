const add_input = (state = {}, action)=> {
  switch (action.type){
    case 'set-text-color':
      return Object.assign({}, state, {
        text_color: action.text_color
      })
    case 'set-bg-color':
      return Object.assign({}, state, {
        bg_color: action.bg_color
      })
    default:
      return state
  }
}

export default add_input