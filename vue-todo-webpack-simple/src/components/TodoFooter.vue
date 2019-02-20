<template>
	<footer class="footer">
    <span class="todo-count"></span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{ selected: getShowState === FILTER.ALL }" @click.left = "showAll">All</a>
      </li>
      <li>
        <a href="#/active" :class="{ selected: getShowState === FILTER.ACTIVE }"  @click.left="showActive">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{ selected: getShowState === FILTER.COMPLETED }"  @click.left="showCompleted">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click.left = "clearCompleted">Clear completed</button>
  </footer>
</template>

<script>

import { FILTER } from '../constant.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoFooter',

  data () {
    return {
      FILTER,
    }
  },

  methods: {
    ...mapActions([
      'changeShwoState',
      'clearCompleted',
    ]),
    showAll() {
      this.changeShwoState(FILTER.ALL);
    },
    showActive() {
      this.changeShwoState(FILTER.ACTIVE);
    },
    showCompleted() {
      this.changeShwoState(FILTER.COMPLETED);
    },
  },

  computed: {
    ...mapGetters([
        'getTodos',
        'getShowState',
    ]),
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
