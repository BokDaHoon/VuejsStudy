<template>
  <input @keydown.enter="insertTodo" v-model="inputTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
</template>

<script>

export default {
  name: 'TodoInput',
  data () {
    return {
      inputTodo :''
    }
  },
  methods : {
    insertTodo : function() {
      this.$emit('insertTodoList', this.inputTodo);
      this.inputTodo = '';
    },
  }
}
</script>

<style>
</style>
