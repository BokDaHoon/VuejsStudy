<template>
  <footer class="footer">
    <span class="todo-count">{{getTodosNewId}}</span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{selected : currentFilter === FILTER.ALL}" @click.prevent="currentFilter = FILTER.ALL" @click.left="updateFilter(FILTER.ALL)">All</a>
      </li>
      <li>
        <a href="#/active" :class="{selected : currentFilter === FILTER.ACTIVE}" @click.prevent="currentFilter = FILTER.ACTIVE" @click.left="updateFilter(FILTER.ACTIVE)">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{selected : currentFilter === FILTER.COMPLETED}" @click.prevent="currentFilter = FILTER.COMPLETED" @click.left="updateFilter(FILTER.COMPLETED)">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="onClickClearComplete">Clear completed</button>
  </footer>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import { FILTER } from '../constants.js'
import MUTATIONS_TYPE from '../store/mutationTypes';
export default {
  name: 'TodoFooter',
  data () {
    return {
      FILTER,
      currentFilter : 'ALL'
    }
  },
  computed: {
    ...mapState({
      todosObj: (state) => state.todo.todos,
      todoFilter : (state) => state.todo.filter,
    }),
    ...mapGetters([
      'getTodosNewId'
    ]),
  },
  methods: {
    ...mapMutations({
      updateFilter: MUTATIONS_TYPE.UPDATE_FILTER
    }),
    onClickClearComplete() {
      this.todosObj = this.todosObj.filter(item=> item.status === FILTER.ACTIVE)
    }
  },
}
</script>

<style>
</style>
