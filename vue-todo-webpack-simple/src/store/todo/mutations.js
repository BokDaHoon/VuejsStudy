import MUTATION_TYPES from '../mutationTypes';

export default {
  [MUTATION_TYPES.ADD_TODO_INPUT]: (state, todo) => {
    state.todos.push(todo);
  },
  [MUTATION_TYPES.DELETE_TODO_INPUT]: (state, index) => {
    state.todos.splice(index, 1);
  },
}
