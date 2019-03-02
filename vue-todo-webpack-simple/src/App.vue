  <template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
        <TodoInput></TodoInput>
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
        <TodoList></TodoList>
			</section>
			<footer class="footer">
				<span class="todo-count"></span>
				<ul class="filters">
					<li>
						<a href="#/" @click.prevent="filter=setFilter(FILTER.ALL)" class="selected">All</a>
					</li>
					<li>
						<a href="#/active" @click.prevent="filter=setFilter(FILTER.ACTIVE)">Active</a>
					</li>
					<li>
						<a href="#/completed" @click.prevent="filter=setFilter(FILTER.COMPLETED)">Completed</a>
					</li>
				</ul>
				<button @click="clearCompleted" class="clear-completed">Clear completed</button>
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

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {mapActions, mapGetters, mapState} from 'vuex';
import { FILTER } from './constants.js'

export default {
  name: 'app',
  components: {TodoInput, TodoList},
  data () {
    return {
      FILTER
    }
  },
  computed: {
    ...mapGetters(['getCompletedTodos']),
  },
  methods: {
    ...mapActions(['deleteInputTodo', 'setFilter', 'initTodos']),
    clearCompleted() {
      const completedTodos = this.getCompletedTodos;
      completedTodos.forEach((item) => this.deleteInputTodo(item.id));
    },

  },
  created: function() {
    this.initTodos();
  },
}
</script>

<style>
</style>
