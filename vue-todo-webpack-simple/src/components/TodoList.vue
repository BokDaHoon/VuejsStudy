<template>
  <ul class="todo-list">
    <li v-for="(item, index) in todoItems" :key="item.id" :class="{completed: item.status}">
      <div class="view">
        <input class="toggle" type="checkbox" @click="updateStatus(index)">
        <label>{{item.todo}}</label>
        <button class="destroy" @click="destroyItem(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
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
    }
  },
  methods: {
    updateStatus(id) {
      this.$emit('updateStatus', id);
    },
    destroyItem(id) {
      this.$emit('destroyItem', id);
    },
  },
}
</script>

<style>
</style>
