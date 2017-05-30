function getId(state){
  return state.todos.reduce((maxId ,todo) =>{
    return Math.max(todo.id,maxId)
  }, -1) +1
}
let reducer = function(state , action){
  switch(action.type){
    case 'ADD_TODO' :
    return Object.assign({},state,{todos:[{
      //add new todos
      text: action.text,
      completed:false,
      id:getId(state)
    },...state.todos]},
  )
  case 'ADD_TODOO' :
  return Object.assign({},state,{data:action.text})
    default:
      return state;
  }
}
export default reducer;
