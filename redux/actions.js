let actions = {
  addTodo: function(text){
    return {
      type : 'ADD_TODO',
      text : text
    }
  },
  addTodoo: function(text){
    return {
      type : 'ADD_TODOO',
      text : text
    }
  }
}
//store.dispath(addTodo('something'))
export default actions
