import MUTATION_TYPES from '../mutationTypes';
import getters from './getters.js'
import todoAPI from './todoAPI';

export default {
  initTodos: async ({ commit }) => {
    const res = await todoAPI.getTodos();
    commit(MUTATION_TYPES.INIT_TODOS, res.data);
  },
  addInputTodo: async ({ commit }, todo) => {
    const res = await todoAPI.inputTodo(todo);
    todo.id = res.data.id;
    commit(MUTATION_TYPES.ADD_TODO_INPUT, todo);
  },
  deleteInputTodo: ({ commit, state }, id) => {
    todoAPI.deleteTodo(id);
    const todos = getters.getTodos(state);
    const index = todos.findIndex((item) => item.id === id);
    commit(MUTATION_TYPES.DELETE_TODO_INPUT, index);
  },
  toggleInputTodo: ({ state }, id) => {
    const todos = getters.getTodos(state);
    const index = todos.findIndex((item) => item.id === id);
    if(todos[index].state === 'none') {
      todos[index].state = 'completed'
      todos[index].checked = true;
    } else {
      todos[index].state = 'none'
      todos[index].checked = false;
    }
    todoAPI.updateTodo(id, todos[index]);
  },
  setFilter: ({ commit }, filter) => {
    commit(MUTATION_TYPES.SET_FILTER, filter);
  },
}
