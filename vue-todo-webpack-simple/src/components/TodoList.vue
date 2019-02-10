<template>
  <ul class="todo-list">
    <li v-for = "(todo,index) in todos" :key="index"
        :class="{ completed: todo.state === FILTER.COMPLETED }">

        <div class="view">
          <input class="toggle" type="checkbox" @click.left="onClickChangeState(index)">
          <label>{{ todo.todoMsg }}</label>
          <button class="destroy" @click.left="onClickDestroyTodo(index)"></button>
        </div>

    </li>
  </ul>
</template>

<script>
import { FILTER } from '../constant.js'
export default {
  name: 'TodoList',
  props : {
    todos: {
      type: Array,
      required: true,
    }
  },

  data () {
    return {
      FILTER,
    }
  },

  methods: {
      onClickChangeState(index) {
        this.$emit('changeStateTodo', index);
      },
      onClickDestroyTodo(index) {
        this.$emit('destroyTodo', index);
      },
  },
}


</script>
