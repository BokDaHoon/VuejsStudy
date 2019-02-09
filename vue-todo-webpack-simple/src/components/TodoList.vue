<template>
  <ul class="todo-list">
    <li v-for="(item, index) in todoItems" :key="item.id" :class="{completed: item.status === FILTER.COMPLETED}">

      <div class="view">
        <input class="toggle" type="checkbox" @click="onClickUpdateStatus(index)">
        <label>{{item.todo}}</label>
        <button class="destroy" @click="onClickDestroyItem(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { FILTER } from '../constants.js'
export default {
  name: 'TodoList',
  props: {
    todoItems: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      FILTER
    }
  },
  methods: {
    onClickUpdateStatus(id) {
      this.$emit('updateStatus', id);
    },
    onClickDestroyItem(id) {
      this.$emit('destroyItem', id);
    },
  },
}
</script>

<style>
</style>
