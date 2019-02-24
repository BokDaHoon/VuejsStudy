import MUTATION_TYPES from '../mutationTypes';
import axios from 'axios'

let URL = 'http://localhost:3000/todos';

export default {
  [MUTATION_TYPES.LOAD_TODO_INPUT]: (state, todos) => {
    state.todos = todos;
  },
  // dynamic property key
  [MUTATION_TYPES.ADD_TODO_INPUT]: (state, todo) => {
    state.todos.push(todo);
  },
  [MUTATION_TYPES.UPDATE_TODO_INPUT]: (state, todo) => {

  },
  [MUTATION_TYPES.DESTROY_TODO_INPUT]: (state, id) => {
    const idx = state.todos.findIndex(x => x.id === id);
    state.todos.splice(idx,1);
  },
  [MUTATION_TYPES.UPDATE_FILTER]: (state, status) => {
    state.filter = status;
  },
}
