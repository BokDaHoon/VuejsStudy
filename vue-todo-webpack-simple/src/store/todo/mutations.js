import MUTATION_TYPES from '../mutationTypes';
import { FILTER } from '../../constant'


export default {

  [MUTATION_TYPES.INIT_TODO]:(state, todos) => {
    state.todos = todos;
  },

  [MUTATION_TYPES.ADD_TODO_INPUT]:(state, newTodo) => {
    state.todos.push(newTodo);
  },
  [MUTATION_TYPES.CHANGE_TODO_STATE]:(state, payLoad) => {
    state.todos.forEach(todo => {
      if(todo.id == payLoad.id) {
        todo.state = payLoad.state;
        return true;
      }
    });
  },
  [MUTATION_TYPES.DESTROY_TODO]:(state, id) => {
    state.todos.forEach((todo, index) => {
      if(todo.id == id) {
        state.todos.splice(index, 1);
        return true;
      }
    });
  },
  [MUTATION_TYPES.CHANGE_SHOW_STATE]:(state, showState) => {
    state.showState = showState;
  },
  [MUTATION_TYPES.CLEAR_COMPLETED]:(state) => {
    state.todos = Array.prototype.filter.call(state.todos, (todo) => {
      return todo.state === FILTER.ACTIVE;
    });
  },
}
