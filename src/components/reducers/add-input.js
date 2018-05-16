const add_input = (state = { icon_theme: 'light', text_color: { color_id: '000', hex_string: "#000000", name: "Black" }, background_color: { color_id: '015', hex_string: "#FFFFFF", name: "White" }, text_btn_toggle: false, background_btn_toggle: false }, action)=> {
  switch (action.type){
    case 'set-palette-toggle':
      const palette_obj = {};
      palette_obj[action.subject+'_btn_toggle'] = action.btn_toggle;
      return Object.assign({}, state, palette_obj)
    case 'set-color':
      const add_item_obj = {};
      add_item_obj[action.subject+'_color'] = action.color_obj;
      add_item_obj[action.subject+'_btn_toggle'] = false;
      return Object.assign({}, state, add_item_obj)
    case 'edit-item':
      return Object.assign({}, state, {
        button_view: action.button_view
      })
    case 'update-value':
      return Object.assign({}, state, {
        input_value: action.new_value
      })
    default:
      return state
  }
}

export default add_input