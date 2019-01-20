

export default {
  activeTodos: (state) => state.todos.filter(todo => todo.state === 'none'),
}
