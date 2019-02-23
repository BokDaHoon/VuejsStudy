import MUTATION_TYPES from '../mutationTypes';

export default {
  loadInputTodo: ({ commit }) => {
    //axios
    commit(MUTATION_TYPES.LOAD_TODO_INPUT);
  },
  addInputTodo: ({ commit }, todo) => {
    //axios
    commit(MUTATION_TYPES.ADD_TODO_INPUT, todo);
  },
  updateStatus: ({ commit }, todo) => {
    //axios
    commit(MUTATION_TYPES.UPDATE_TODO_INPUT, todo);
  },
  destroyStatus: ({ commit }, todo) => {
    //axios
    commit(MUTATION_TYPES.DESTROY_TODO_INPUT, todo);
    commit(MUTATION_TYPES.LOAD_TODO_INPUT);
  },
}
