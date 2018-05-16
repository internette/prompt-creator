const add_input = (state = { text_color: { color_id: '000', hex_string: "#000000", name: "Black" }, background_color: { color_id: '015', hex_string: "#FFFFFF", name: "White" }, text_btn_toggle: false, bg_btn_toggle: false }, action)=> {
  switch (action.type){
    case 'set-text-palette-toggle': 
      return Object.assign({}, state, {
        text_btn_toggle: action.text_btn_toggle
      })
    case 'set-background-palette-toggle': 
      return Object.assign({}, state, {
        bg_btn_toggle: action.bg_btn_toggle
      })
    case 'set-color':
      const obj = {};
      obj[action.subject+'_color'] = action;
      return Object.assign({}, state, obj)
    default:
      return state
  }
}

export default add_input