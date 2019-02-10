<template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
        <TodoInput @inputTodo="addTodo"></TodoInput>
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
        <TodoList :todos= todos @changeStateTodo="changeState" @destroyTodo = "destroyTodo"></TodoList>
			</section>
      <TodoFooter @allTodo = "changeAllState" @clearCompleted = "clearCompleted"></TodoFooter>
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

export default {
  name: 'app',
  components : {TodoInput, TodoList, TodoFooter},
  data () {
    return {
      todos: [{ todoId: 1, todoMsg: "Test", state : FILTER.ACTIVE}],
    }
  },

  methods: {
     addTodo(msg) {
        let newTodo = {
          todoId : this.todos.length + 1,
          todoMsg : msg,
          state: FILTER.ACTIVE,
        }
        this.todos.push(newTodo);
      },

      changeAllState() {
        // this.todos.forEach((todo,index) => {
        //   if(todo.state === FILTER.ACTIVE) {
        //     this.todos[index].state = FILTER.COMPLETED;
        //   }
        // });
      },

      changeState(index) {
        this.$set(this.todos,index, {...this.todos[index], state : this.todos[index].state === FILTER.ACTIVE? FILTER.COMPLETED : FILTER.ACTIVE })
      },

      destroyTodo(index) {
        this.todos.splice(index, 1);
      },

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
