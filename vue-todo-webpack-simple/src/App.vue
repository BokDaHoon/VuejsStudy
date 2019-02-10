  <template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
        <TodoInput @insertTodoList="insertTodo"></TodoInput>
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
        <TodoList :todos="todos" @togleCompleted="togleCompleted" @deleteTodo="deleteTodo"></TodoList>
			</section>
			<footer class="footer">
				<span class="todo-count"></span>
				<ul class="filters">
					<li>
						<a href="#/" @click.prevent="filter=FILTER.ALL" class="selected">All</a>
					</li>
					<li>
						<a href="#/active" @click.prevent="filter=FILTER.ACTIVE">Active</a>
					</li>
					<li>
						<a href="#/completed" @click.prevent="filter=FILTER.COMPLETED">Completed</a>
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
import TodoFooter from './components/TodoFooter';
import {mapActions, mapGetters, mapState} from 'vuex';

export const FILTER = {
  ALL: 'ALL',
  ACTIVE: 'ACTIVE' ,
  COMPLETED: 'COMPLETED'
}

import { FILTER } from './constants.js'

export default {
  name: 'app',
  components: {TodoInput, TodoList, TodoFooter},
  data () {
    return {
      FILTER,
      filter: FILTER.ALL,
      msg: 'Welcome to Your Vue.js App',
      todoList:[],
      maxId: 1,
      completeArr:[],
    }
  },
  computed: {
    ...mapGetters(['getTodos']),
    todos() {
      this.todoList = this.getTodos;
      switch(this.filter) {
        case FILTER.ALL : return this.todoList;
        case FILTER.ACTIVE : return this.todoList.filter(todo => todo.state === 'none')
        case FILTER.COMPLETED : return this.todoList.filter(todo => todo.state === 'completed')
      }
    },
  },
  methods: {
    ...mapActions(['addInputTodo', 'deleteInputTodo']),
    insertTodo(value) {
      let todo = {};
      todo.id = this.maxId;
      this.maxId++;
      todo.todo = value;
      todo.state = 'none';
      todo.checked = false;
      this.addInputTodo(todo);
    },
    deleteTodo(id) {
      this.todoList = this.$store.getters.getTodos;
      const index = this.todoList.findIndex((item) => item.id === id);
      this.$store.dispatch('deleteInputTodo',index);
    },
    togleCompleted(id) {
      this.todoList = this.$store.getters.getTodos;
      const index = this.todoList.findIndex((item) => item.id === id);
      if(this.todoList[index].state === 'none') {
        this.todoList[index].state = 'completed'
        this.todoList[index].checked = false;
      } else {
        this.todoList[index].state = 'none'
        this.todoList[index].checked = true;
      }
    },
    clearCompleted() {
      this.todoList = this.$store.getters.getTodos;
      for(let i=0; i<this.todoList.length; i++) {
        if(this.todoList[i].state === 'completed') {
          this.todoList.splice(i, 1)
          i--;
        }
      }
    },

  },
}
</script>

<style>
</style>
