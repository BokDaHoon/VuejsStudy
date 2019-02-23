import MUTATION_TYPES from '../mutationTypes';
import { FILTER } from '../../constants.js';
import axios from 'axios'
let URL = 'http://localhost:3000/todos';

export default {
  [MUTATION_TYPES.LOAD_TODO_INPUT]: (state) => {
    axios.get(URL)
        .then((res) => {
          state.todos = res.data;
        })
  },
  // dynamic property key
  [MUTATION_TYPES.ADD_TODO_INPUT]: (state, todo) => {
    axios.post(URL, todo)
        .then((res) => {
          state.todos.push(todo);
        }).catch(function (error) {
          console.log(error);
        });
  },
  [MUTATION_TYPES.UPDATE_TODO_INPUT]: (state, todo) => {
    let status = todo.status === FILTER.ACTIVE ? FILTER.COMPLETED : FILTER.ACTIVE;
    todo.status = status;
    axios.put(`${URL}/${todo.id}`, todo)
    .then((res) => {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });

  },
  [MUTATION_TYPES.DESTROY_TODO_INPUT]: (state, id) => {
    console.log(id);
    axios.delete(`${URL}/${id}`)
    .then((res) => {
      // commit([MUTATION_TYPES.LOAD_TODO_INPUT]);
    }).catch(function (error) {
      console.log(error);
    });
  },
}
