<template>
  <input class="new-todo" v-model="todoMsg" placeholder="What needs to be done?" @keydown.enter ="addTodo" autofocus>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { FILTER } from '../constant'

export default {
  name: 'TodoInput',

  data () {
    return {
      todoMsg : ""
    }
  },

  methods: {
    ...mapActions(['addInputTodo']),
    addTodo() {
      let newTodo = {
        todoMsg : this.todoMsg,
        state: FILTER.ACTIVE,
      }
      this.addInputTodo(newTodo);
      this.todoMsg = "";
    },
  },

  computed: mapGetters([
    ]),

}
</script>
