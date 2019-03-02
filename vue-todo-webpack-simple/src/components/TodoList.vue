<template>
  <ul class="todo-list">
    <li v-for = "(todo,index) in getTodos" :key="index" v-show = 'getShowState === FILTER.ALL || todo.state === getShowState'
        :class="{ completed: todo.state === FILTER.COMPLETED }">

        <div class="view">
          <input class="toggle" type="checkbox" :checked="todo.state === FILTER.COMPLETED" @click.left="changeState(todo)">
          <label>{{ todo.todoMsg }}</label>
          <button class="destroy" @click.left="destroyTodo(todo.id)"></button>
        </div>

    </li>
  </ul>
</template>

<script>
import { FILTER } from '../constant'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoList',

  data () {
    return {
      FILTER,
    }
  },

  methods: {
    ...mapActions(['changeTodoState', 'destroyTodoState' , 'initTodo']),
    changeState(todo) {
      todo.state = todo.state === FILTER.ACTIVE? FILTER.COMPLETED : FILTER.ACTIVE;
      this.changeTodoState(todo);
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
  created () {
    this.initTodo();
  }
}


</script>
