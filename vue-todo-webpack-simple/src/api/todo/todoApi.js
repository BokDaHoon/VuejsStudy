import axios from 'axios'

const baseUrl = 'http://localhost:3000/todos'

export default {
  getTodoList : () => {
    return axios.get(`${baseUrl}`);
  },

  addTodoList : (todo) => {
    return axios.post(`${baseUrl}`, todo);
  },

  changeTodo : (todo) => {
    return axios.put(`${baseUrl}/${todo.id}`, todo);
  },

  deleteTodo : (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  },
}
