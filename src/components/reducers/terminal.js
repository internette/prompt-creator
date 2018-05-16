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
    default:
      return state
  }
}

export default terminal