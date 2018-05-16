const add_input = (state = { text_btn_toggle: false, bg_btn_toggle: false }, action)=> {
  switch (action.type){
    case 'set-text-palette-toggle': 
      return Object.assign({}, state, {
        text_btn_toggle: action.text_btn_toggle
      })
    case 'set-background-palette-toggle': 
      return Object.assign({}, state, {
        bg_btn_toggle: action.bg_btn_toggle
      })
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