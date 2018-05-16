const creator = (state = { parts: [] }, action)=> {
  switch (action.type){
    case 'add-item':
      const parts = state.parts.map((part, index)=> {
        return Object.assign({}, part, {
          id: index
        })
      });
      action.item_to_add.id = parts.length;
      action.item_to_add.is_editing = false;
      parts.push(action.item_to_add);
      return Object.assign({}, state, {
        parts: parts
      })
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
        parts: parts
      });
    default:
      return state
  }
}

export default creator