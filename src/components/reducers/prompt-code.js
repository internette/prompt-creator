const prompt_code = (state = { parts: [], prompt: '', toggle_state: false }, action)=> {
  switch (action.type){
    case 'add-item':
      if(state.parts.length === 0){
        action.item_to_add.id = state.parts.length;
        action.item_to_add.is_editing = false;
        state.parts.push(action.item_to_add);
        console.log(action.item_to_add.text_color)
        return Object.assign({}, state, {
          parts: state.parts.slice(0)
        })
      }
    case 'update-item':
    case 'remove-item':
    case 'toggle-code-visibility':
      return Object.assign({}, state, {
        toggle_state: action.toggle_state
      })
    default:
      return state
  }
}
export default prompt_code