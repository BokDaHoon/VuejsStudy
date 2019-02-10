<template>
	<footer class="footer">
    <span class="todo-count"></span>
    <ul class="filters">
      <li>
        <a href="#/" class="selected" @click.left = "onClickAllTodo">All</a>
      </li>
      <li>
        <a href="#/active" @click.left="allActive">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click.left = "onClickClearCompleted">Clear completed</button>
  </footer>
</template>

<script>

// let todos = [];
// import {mapActions, mapGetters, mapState} from 'vuex';
import { FILTER } from '../constant.js'
export default {
  name: 'TodoFooter',

  data () {
    return {
      FILTER,
    }
  },

  methods: {
     onClickAllTodo() {
        this.$emit('allTodo');
      },
     onClickClearCompleted() {
        this.$emit('clearCompleted');
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
