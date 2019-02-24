<template>
  <ul class="todo-list">
    <li v-for="(item) in filterTodos" :key="item.id" :class="{completed: item.status === FILTER.COMPLETED}">

      <div class="view">
        <input class="toggle" type="checkbox" @click="onClickUpdateStatus(item)" :checked="item.status === FILTER.COMPLETED">
        <label>{{item.todo}}</label>
        <button class="destroy" @click="onClickDestroyItem(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import { FILTER } from '../constants.js'
export default {
  name: 'TodoList',
  data () {
    return {
      FILTER,
    }
  },
  computed: {
    ...mapState({
      todosObj: (state) => state.todo.todos,
      todoFilter : (state) => state.todo.filter,
    }),
    ...mapGetters([
      'getTodosActiveStatus','getTodosCompletedStatus'
    ]),
    filterTodos() {
      switch(this.todoFilter) {
        case FILTER.ALL:
          return this.todosObj;
        case FILTER.ACTIVE:
          return this.getTodosActiveStatus;
        case FILTER.COMPLETED:
          return this.getTodosCompletedStatus;
      }
    }
  },
  methods: {
    ...mapActions([
      'updateStatus',
      'destroyStatus'
    ]),
    onClickUpdateStatus(todo) {
      this.updateStatus(todo);
    },
    onClickDestroyItem(id) {
      this.destroyStatus(id);
    },
  },
}
</script>

<style>
</style>
