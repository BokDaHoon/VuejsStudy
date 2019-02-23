<template>
  <footer class="footer">
    <span class="todo-count">{{getTodosNewId}}</span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{selected : currentFilter === FILTER.ALL}" @click.prevent="currentFilter = FILTER.ALL" @click.left="onViewItems(FILTER.ALL)">All</a>
      </li>
      <li>
        <a href="#/active" :class="{selected : currentFilter === FILTER.ACTIVE}" @click.prevent="currentFilter = FILTER.ACTIVE" @click.left="onViewItems(FILTER.ACTIVE)">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{selected : currentFilter === FILTER.COMPLETED}" @click.prevent="currentFilter = FILTER.COMPLETED" @click.left="onViewItems(FILTER.COMPLETED)">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="onClickClearComplete">Clear completed</button>
  </footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { FILTER } from '../constants.js'
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
    }),
    ...mapGetters([
      'getTodosActiveStatus','getTodosCompletedStatus','getTodosNewId'
    ]),
  },
  methods: {
    onViewItems(filter){
      switch(filter) {
        case FILTER.ALL:
        return this.todosObj;
        case FILTER.ACTIVE:
        return this.getTodosActiveStatus;
        case FILTER.COMPLETED:
        return this.getTodosCompletedStatus;
      }
    },
    onClickClearComplete() {
      this.todosObj = this.todosObj.filter(item=> item.status === FILTER.ACTIVE)
    }
  },
}
</script>

<style>
</style>
