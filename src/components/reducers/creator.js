const creator = (state = { parts: [] }, action)=> {
  switch (action.type){
    case 'add-item':
      action.item_to_add.is_editing = false;
      state.parts.push(action.item_to_add);
      return Object.assign({}, state, {
        parts: state.parts.slice(0)
      })
    case 'update-item':
      return console.log(action)
    case 'remove-item':
      let without_removed_item = state.parts.filter((part)=> {
        if(part.id !== action.item_to_remove.id){
          return part
        }
      }).map((part, index)=> {
        return Object.assign({}, part, {
          id: index
        })
      });
      return Object.assign({}, state, {
        parts: state.parts
      });
    default:
      return state
  }
}

export default creator