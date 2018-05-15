const creator = (state = {}, action)=> {
  switch (action.type){
    case 'get-items':
      return Object.assign({}, state, {
        items: []
      })
    default:
      return state
  }
}

export default creator