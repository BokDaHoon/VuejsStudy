import MUTATION_TYPES from '../mutationTypes';
import { FILTER } from '../../constants.js';
import api from './todoApi.js';

export default {
  loadInputTodo: async ({ commit }) => {
    //axios
    const res = await api.loadInputTodo();
    commit(MUTATION_TYPES.LOAD_TODO_INPUT, res);
  },
  addInputTodo: async ({ commit }, todo) => {
    //axios
    const res = await api.addInputTodo(todo);
    commit(MUTATION_TYPES.ADD_TODO_INPUT, res);
  },
  updateStatus: async ({ commit }, todo) => {
    //axios
    try {
      let status = todo.status === FILTER.ACTIVE ? FILTER.COMPLETED : FILTER.ACTIVE;
      todo.status = status;
      await api.updateStatus(todo);
      commit(MUTATION_TYPES.UPDATE_TODO_INPUT, todo);
    } catch(e) {
      console.log(e);
    }
  },
  destroyStatus: async ({ commit }, id) => {
    //axios
    try {
      await api.destroyStatus(id);
      commit(MUTATION_TYPES.DESTROY_TODO_INPUT, id);
    } catch(e) {
      console.log(e);
    }
  },
}
