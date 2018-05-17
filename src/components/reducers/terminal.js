const terminal = (state = { parts: [] }, action)=> {
  switch (action.type){
    case 'add-item':
      const parts = state.parts.map((part, index)=> {
        return Object.assign({}, part, {
          id: index
        })
      });
      action.item_to_add.id = parts.length;
      parts.push(action.item_to_add);
      return Object.assign({}, state, {
        parts: parts
      })
    case 'update-item':
      const updated_parts = state.parts.slice(0).map((part)=> {
        if(part.id === action.item_to_update.id) {
          return Object.assign({}, part, action.item_to_update);
        } else {
          return part
        }
      });
      return Object.assign({}, state, {
        parts: updated_parts
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
        parts: without_removed_item
      });
    default:
      return state
  }
}

export default terminal