import axios from 'axios';

const baseURI = 'http://localhost:3000';

export default {
  getTodos : function() {
    return axios.get(`${baseURI}/todos`);
  },
  inputTodo : function(todo) {
    return axios.post(`${baseURI}/todos`, todo);
  },
  deleteTodo : function(id) {
    axios.delete(`${baseURI}/todos/${id}`);
  },
  updateTodo : function(id, todo) {
    axios.put(`${baseURI}/todos/${id}`, todo);
  },
}
