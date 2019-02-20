export default {
  getTodos : function(state) {
    return state.todos;
  },
  getShowState : function(state) {
    return state.showState;
  },
  getNewId : function(state) {
    return state.newTodoId;
  },

}
