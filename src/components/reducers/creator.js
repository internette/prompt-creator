const creator = (state = { parts: [] }, action)=> {
  switch (action.type){
    case 'add-item':
      return Object.assign({}, state, {
        parts: []
      })
    default:
      return state
  }
}

export default creator