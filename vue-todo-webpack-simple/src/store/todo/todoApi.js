import axios from 'axios';
let URL = 'http://localhost:3000/todos';

export default {
  loadInputTodo: () => axios.get(URL).then(res => res.data),
  addInputTodo: (todo) => axios.post(URL, todo).then(res => res.data),
  updateStatus: (todo) => axios.put(`${URL}/${todo.id}`, todo),
  destroyStatus: (id) => axios.delete(`${URL}/${id}`)
}
