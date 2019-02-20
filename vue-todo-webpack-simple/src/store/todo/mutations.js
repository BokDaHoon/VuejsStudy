import MUTATION_TYPES from '../mutationTypes';
import {FILTER} from '../../constant';


export default {
  [MUTATION_TYPES.ADD_TODO_INPUT]:(state, todo) => {
    state.todos.push(todo);
    state.newTodoId++;
  },
  [MUTATION_TYPES.CHANGE_TODO_STATE]:(state, id) => {
    //왜 todos를 배열로 인식 못하는지 모르겠음 .... 그래서 프로토타입 사용함.
    Array.prototype.some.call(state.todos, todo => {
      if(todo.id == id) {
        todo.state = todo.state === FILTER.ACTIVE? FILTER.COMPLETED : FILTER.ACTIVE;
        return true;
      }
    });
  },
  [MUTATION_TYPES.DESTROY_TODO]:(state, id) => {
    Array.prototype.some.call(state.todos, (todo, index) => {
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
