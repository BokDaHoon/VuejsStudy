<template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<TodoInput @inputObj="compAddItem"/>
			</header>
			<section class="main">

				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
        <TodoList :todoItems="items" @updateStatus="compUpdateStatus" @destroyItem="compDestryItem"/>
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
				<button class="clear-completed" @click="onClickClearComplete">Clear completed</button>
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
import { FILTER } from './constants.js'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

//import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'app',
  components : {TodoFooter, TodoInput, TodoList},
  data () {
    return {
      FILTER,
      currentFilter: FILTER.ALL,
      items: [],
    }
  },
  computed: {
    /*...mapState({
      todosVuex: state.todo.todos,
    }),*/
    viewItems(){
      switch(this.filter) {
        case FILTER.ALL:
        return this.items;
        case FILTER.ACTIVE:
        return this.items.filter(item=> item.status === FILTER.ACTIVE)
        case FILTER.COMPLETED:
        return this.items.filter(item=> item.status === FILTER.COMPLETED)
      }
    }
  },
  methods: {
    compAddItem(value) {
      let itemFormat = {
        id : this.items.length,
        todo : value,
        status : FILTER.ACTIVE
      }
      this.items.push(itemFormat);
    },
    compUpdateStatus(id) {
      const index = this.items.findIndex(todo => todo.id === id);
      let status = this.items[index].status === FILTER.ACTIVE ? FILTER.COMPLETED : FILTER.ACTIVE;
      return this.$set(this.items, index, {...this.items[index] , todo : this.items[index].todo, status : status });
    },
    compDestryItem(id) {
      const index = this.items.findIndex(todo => todo.id === id);
      this.items.splice(index, 1);
    },
    onClickClearComplete() {
      this.items = this.items.filter(item=> item.status === FILTER.ACTIVE)
    }
  },
}
</script>

<style>
</style>
