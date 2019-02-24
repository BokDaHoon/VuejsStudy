import { FILTER } from '../../constants.js';

export default {
  getTodosActiveStatus: function(state, getters) {
    return state.todos.filter(item=> item.status === FILTER.ACTIVE);
  },
  getTodosCompletedStatus: function(state, getters) {
    return state.todos.filter(item=> item.status === FILTER.COMPLETED);
  },
  getTodosNewId: function(state, getters) {
    return state.todos.length;
  }
};
