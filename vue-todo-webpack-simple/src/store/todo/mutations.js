import MUTATION_TYPES from '../mutationTypes';

export default {
  // dynamic property key
  [MUTATION_TYPES.ADD_TODO_INPUT]: (state, todo) => {
    state.todo.todos.push(todo);
  }
}
