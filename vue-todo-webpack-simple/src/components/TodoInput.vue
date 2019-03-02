<template>
  <input @keydown.enter="insertTodo" v-model="inputTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
</template>

<script>

import {mapActions} from 'vuex';

export default {
  name: 'TodoInput',
  data () {
    return {
      inputTodo : '',
    }
  },
  methods : {
    ...mapActions(['addInputTodo']),
    insertTodo : function() {
      let todo = {};
      todo.todo = this.inputTodo;
      todo.state = 'none';
      todo.checked = false;
      this.addInputTodo(todo);
      this.inputTodo = '';
    },
  }
}
</script>

<style>
</style>
