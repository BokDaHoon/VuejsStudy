<template>
  <ul class="todo-list">
    <li v-for="item in todos" :key="item.id" :class="{completed:item.state === 'completed'}">
      <div class="view">
        <input class="toggle" type="checkbox" @click="onClickToggleTodo(item.id)" v-model="item.checked">
        <label>{{item.todo}}</label>
        <button @click="onClickDeleteTodo(item.id)" class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex';
import { FILTER } from '../constants.js'

export default {
  name: 'TodoList',
  data () {
    return {
      FILTER,
    }
  },
  computed: {
    ...mapGetters(['getTodos', 'getActiveTodos', 'getCompletedTodos']),
    ...mapState({
      filter: (state) => state.todo.filter,
    }),
    todos() {
      switch(this.filter) {
        case FILTER.ALL : return this.getTodos;
        case FILTER.ACTIVE : return this.getActiveTodos;
        case FILTER.COMPLETED : return this.getCompletedTodos;
      }
    },
  },
  methods : {
    ...mapActions(['deleteInputTodo', 'toggleInputTodo']),
    onClickToggleTodo(id) {
      this.toggleInputTodo(id);
    },
    onClickDeleteTodo(id) {
      this.deleteInputTodo(id);
    }
  }
}
</script>

<style>
</style>
