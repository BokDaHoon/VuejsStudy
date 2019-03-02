import MUTATION_TYPES from '../mutationTypes'
import { todoApi } from '../../api/todo/'
import { log4Js } from '../../util/log'

export default {

  initTodo : async ({commit}) => {
    try {
      let todos = await todoApi.getTodoList();
      commit(MUTATION_TYPES.INIT_TODO , todos.data);
    }
    catch(e) {
      log4Js.showError(e);
    }
  },
  addInputTodo : async ({commit} , todo) => {
    try {
      let newTodo = await todoApi.addTodoList(todo);
      commit(MUTATION_TYPES.ADD_TODO_INPUT, newTodo.data);
    }
    catch(e) {
      log4Js.showError(e);
    }
  },
  changeTodoState : async ({commit} , todo) => {
    try {
      await todoApi.changeTodo(todo);
      commit(MUTATION_TYPES.CHANGE_TODO_STATE, todo);
    }
    catch(e) {
      log4Js.showError(e);
    }
  },
  destroyTodoState : async ({commit} , id) => {
    try {
      await todoApi.deleteTodo(id);
      commit(MUTATION_TYPES.DESTROY_TODO, id);
    }
    catch(e) {
      log4Js.showError(e);
    }
  },
  changeShwoState : ({commit} , showState) => {
    commit(MUTATION_TYPES.CHANGE_SHOW_STATE, showState);
  },
  clearCompleted : ({commit}) => {
    commit(MUTATION_TYPES.CLEAR_COMPLETED);
  },
}
