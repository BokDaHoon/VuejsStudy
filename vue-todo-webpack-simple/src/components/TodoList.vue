<template>
  <ul class="todo-list">
    <li v-for="item in todos" :key="item.id" :class="{completed:item.state === 'completed'}">
      <div class="view">
        <input class="toggle" type="checkbox" @click="togleCompleted(item.id)" v-model="item.checked">
        <label>{{item.todo}}</label>
        <button @click="deleteTodo(item.id)" class="destroy"></button>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'TodoList',
  props : {
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      todoList : []
    }
  },
  methods : {
    togleCompleted(id) {
      //this.$emit('togleCompleted', id);
      this.todoList = this.$store.getters.getTodos;
      const index = this.todoList.findIndex((item) => item.id === id);
      if(this.todoList[index].state === 'none') {
        this.todoList[index].state = 'completed'
        this.todoList[index].checked = false;
      } else {
        this.todoList[index].state = 'none'
        this.todoList[index].checked = true;
      }
    },
    deleteTodo(id) {
      this.$emit('deleteTodo', id);
    }
  }
}
</script>

<style>
</style>
