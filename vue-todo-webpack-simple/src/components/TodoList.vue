<template>
  <ul class="todo-list">
    <li v-for = "(todo,index) in getTodos" :key="index" v-show = 'getShowState === FILTER.ALL || todo.state === getShowState'
        :class="{ completed: todo.state === FILTER.COMPLETED }">

        <div class="view">
          <input class="toggle" type="checkbox" @click.left="changeState(todo.id)">
          <label>{{ todo.todoMsg }}</label>
          <button class="destroy" @click.left="destroyTodo(todo.id)"></button>
        </div>

    </li>
  </ul>
</template>

<script>
import { FILTER } from '../constant.js'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',

  data () {
    return {
      FILTER,
    }
  },

  methods: {
    ...mapActions(['changeTodoState', 'destroyTodoState']),
    changeState(id) {
      this.changeTodoState(id);
    },
    destroyTodo(id) {
      this.destroyTodoState(id);
    },
  },

  computed:{
    ...mapGetters([
        'getTodos',
        'getShowState',
      ]),
    getShowTodos() {
      return getTodos;
    }
  },
}


</script>
