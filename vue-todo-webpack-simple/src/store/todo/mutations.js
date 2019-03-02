import MUTATION_TYPES from '../mutationTypes';

export default {
  [MUTATION_TYPES.ADD_TODO_INPUT]: (state, todo) => {
    state.todos.push(todo);
  },
  [MUTATION_TYPES.DELETE_TODO_INPUT]: (state, index) => {
    state.todos.splice(index, 1);
  },
  [MUTATION_TYPES.SET_FILTER]: (state, filter) => {
    state.filter = filter;
  },
  [MUTATION_TYPES.INIT_TODOS]: (state, todos) => {
    state.todos = todos;
  }
}
