<template>
  <input v-model="todoMsg" class="new-todo" placeholder="What needs to be done?" @keyup.enter="onKeyupAddItem" autofocus>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { FILTER } from '../constants.js'
export default {
  name: 'TodoInput',
  data () {
    return {
      todoMsg: '',
    }
  },
  computed: {
    ...mapGetters([
      'getTodosNewId'
    ]),
  },
  methods: {
    ...mapActions([
      'addInputTodo'
    ]),
    onKeyupAddItem() {
      let itemFormat = {
        // id : this.getTodosNewId,
        todo : this.todoMsg,
        status : FILTER.ACTIVE
      }
      this.addInputTodo(itemFormat);
    },
  },
}

</script>

<style>
</style>
