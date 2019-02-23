<template>
  <ul class="todo-list">
    <li v-for="(item) in todosObj" :key="item.id" :class="{completed: item.status === FILTER.COMPLETED}">

      <div class="view">
        <input class="toggle" type="checkbox" @click="onClickUpdateStatus(item)">
        <label>{{item.todo}}</label>
        <button class="destroy" @click="onClickDestroyItem(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { FILTER } from '../constants.js'
export default {
  name: 'TodoList',
  data () {
    return {
      FILTER
    }
  },
  computed: {
    ...mapState({
      todosObj: (state) => state.todo.todos,
    }),
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
