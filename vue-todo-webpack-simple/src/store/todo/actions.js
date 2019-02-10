import MUTATION_TYPES from '../mutationTypes';

export default {
  addInputTodo: ({ commit }, todo) => {

    //TODO Insert Action By Axios

    commit(MUTATION_TYPES.ADD_TODO_INPUT, todo);

  },
  deleteInputTodo: ({ commit }, index) => {

    //TODO Delete Action By Axios

    commit(MUTATION_TYPES.DELETE_TODO_INPUT, index);

  }
}
