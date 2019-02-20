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
      <TodoFooter ></TodoFooter>
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

// let todos = [];
// import {mapActions, mapGetters, mapState} from 'vuex';
import { FILTER } from './constant.js'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: 'app',
  components : {TodoInput, TodoList, TodoFooter},
  data () {
    return {
      todos : this.$store.getters.getTodos,
    }
  },

  methods: {
      clearCompleted() {
        console.log("this");
        this.todos = this.todos.filter((todo) => todo.state === FILTER.ACTIVE);
      },
  },
}

//주석제거




</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 100%;
  text-align : left;
  margin: 0 0px;
}

a {
  color: #42b983;
}
</style>
