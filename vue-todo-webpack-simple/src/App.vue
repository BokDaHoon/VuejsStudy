<template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo" v-model="todoMsg" placeholder="What needs to be done?" @keydown.enter ="addTodo" autofocus>
			</header>
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">

          <li
              v-for = "(todo,index) in todos" :key="index"
              v-bind:class="{ completed: todo.isCompleted }">
              <div class="view">
                <input class="toggle" type="checkbox" @click.left="toggleComplete(index)">
                <label>{{ todo.todoMsg }}</label>
                <button class="destroy">{{todo.isCompleted}}</button>
              </div>
          </li>

        </ul>
			</section>
			<footer class="footer">
				<span class="todo-count"></span>
				<ul class="filters">
					<li>
						<a href="#/" class="selected">All</a>
					</li>
					<li>
						<a href="#/active" @click.left="allActive">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button class="clear-completed">Clear completed</button>
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

// let todos = [];
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      todos: [{ todoId: 1, todoMsg: "Test", isCompleted : false}],
      todosTemp : [],
      // isCompleted : false,
    }
  },

  methods: {
     addTodo(index) {
        let newTodo = {
          todoId : this.todos.length + 1,
          todoMsg : this.todoMsg,
          isCompleted: false,
        }

        this.todos.push(newTodo);
        this.todoMsg = "";
      },

      toggleComplete(index) {
        //  return this.number--;

        this.$set(this.todos,index, {...this.todos[index], isCompleted : this.todos[index].isCompleted? false : true })

      // return this.$set(this.todos,index, {...this.todos[index], isCompleted : this.todos[index].isCompleted? false : true });
      },

      allActive() {

        this.todos.filter((n) => {
           console.log(n);
        });

      },
  },
  computed : {
    // ...mapState({
    //   todosVuex : state.todo.todos,
    // }),
  }
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
