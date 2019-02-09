<template>
  <input v-model="todoMsg" class="new-todo" placeholder="What needs to be done?" @keyup.enter="onKeyupAddItem" autofocus>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      todoMsg: '',
    }
  },
  methods: {
    onKeyupAddItem() {
      this.$emit('inputObj', this.todoMsg);
    },
  },
}

</script>

<style>
</style>
