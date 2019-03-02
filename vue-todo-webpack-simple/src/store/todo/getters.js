export default {
  getTodos : function(state) {
    return state.todos;
  },
  getActiveTodos : function(state) {
    return state.todos.filter(todo => todo.state === 'none');
  },
  getCompletedTodos : function(state) {
    return state.todos.filter(todo => todo.state === 'completed');
  },
}
