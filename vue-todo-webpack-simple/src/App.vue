<template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
          v-model="inputValue"
          @keyup.enter="onInputTodo">
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
          <li
          v-for="todo in todos"
          :key="todo.id"
          :class="{ completed: todo.state === 'completed' }">
            <div class="view">
              <input
              class="toggle"
              type="checkbox"
              @click="onClickCheckBox(todo.id)"
              :value="todo.text">
              <label>{{todo.text}}</label>
              <button class="destroy" @click="onClickTodoDelete(todo.id)"></button>
            </div>
          </li>
        </ul>
			</section>
			<footer class="footer">
				<span class="todo-count"></span>
				<ul class="filters">
					<li>
						<a href="#/" class="selected" @click.prevent="currentFilter = FILTER.ALL">All</a>
					</li>
					<li>
						<a href="#/active" @click.prevent="currentFilter = FILTER.ACTIVE">Active</a>
					</li>
					<li>
						<a href="#/completed" @click.prevent="currentFilter = FILTER.COMPLETED">Completed</a>
					</li>
				</ul>
				<button class="clear-completed" @click="onClickClearCompleted">Clear completed</button>
			</footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
			<p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
  </div>
</template>

<script>

const FILTER = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
};

export default {
  name: 'app',
  data () {
    return {
      FILTER,
      currentFilter: FILTER.ALL,
      inputValue: '',
      originTodos: [],
    }
  },
  computed: {
    todos() {
      switch (this.currentFilter) {
        case FILTER.ALL:
          return this.originTodos;
        case FILTER.ACTIVE:
          return this.originTodos.filter(todo => todo.state === 'none');
        case FILTER.COMPLETED:
          return this.originTodos.filter(todo => todo.state === 'completed');
      }
      return this.originTodos;
    }
  },
  methods: {
    onInputTodo() {
      if (!this.inputValue) {
        return;
      }
      this.originTodos.push({ id : this.originTodos.length, text : this.inputValue, state: 'none' });
      this.inputValue = '';
    },
    onClickTodoDelete(id) {
      const index = this.originTodos.findIndex(todo => todo.id === id);
      this.originTodos.splice(index, 1);
    },
    onClickCheckBox(id) {
      const index = this.originTodos.findIndex(todo => todo.id === id);
      this.originTodos[index].state = (this.originTodos[index].state === 'completed') ? 'none' : 'completed';
    },
    onClickClearCompleted() {
      this.originTodos = this.originTodos.filter(todo => todo.state !== 'completed');
    }
  }
}
</script>
