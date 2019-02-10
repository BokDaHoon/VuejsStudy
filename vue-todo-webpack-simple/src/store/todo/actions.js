import MUTATION_TYPES from '../mutationTypes'

export default {
  addInputTodo : ({commit} , todo) => {
    //axios
    commit(MUTATION_TYPES.ADD_TODO_INPUT, todo);
  },
}
