import MUTATION_TYPES from '../mutationTypes'

export default {
  addInputTodo : ({commit} , todo) => {
    commit(MUTATION_TYPES.ADD_TODO_INPUT, todo);
  },
  changeTodoState : ({commit} , id) => {
    commit(MUTATION_TYPES.CHANGE_TODO_STATE, id);
  },
  destroyTodoState : ({commit} , id) => {
    commit(MUTATION_TYPES.DESTROY_TODO, id);
  },
  changeShwoState : ({commit} , showState) => {
    commit(MUTATION_TYPES.CHANGE_SHOW_STATE, showState);
  },
  clearCompleted : ({commit}) => {
    commit(MUTATION_TYPES.CLEAR_COMPLETED);
  },
}
