const creator = (state = { parts: [] }, action)=> {
  switch (action.type){
    case 'add-item':
      action.item_to_add.id = state.parts.length;
      action.item_to_add.is_editing = false;
      state.parts.push(action.item_to_add);
      return Object.assign({}, state, {
        parts: state.parts.slice(0)
      })
    case 'update-item':
      const updated_parts = state.parts.slice(0).map((part)=> {
        if(part.id === action.item_to_update.id) {
          return Object.assign({}, part, action.item_to_update);
        } else {
          return part;
        }
      });
      return Object.assign({}, state, {
        parts: updated_parts
      })
    case 'remove-item':
      const without_removed_item = state.parts.filter((part)=> {
        if(part.id !== action.item_to_remove.id){
          return part;
        } else {
          return undefined;
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

export default creator