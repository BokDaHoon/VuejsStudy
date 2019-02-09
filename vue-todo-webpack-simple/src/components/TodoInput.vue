<template>
  <input class="new-todo" v-model="todoMsg" placeholder="What needs to be done?" @keydown.enter ="addItme" autofocus>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      todoMsg : ""
    }
  },

  methods: {
     addItme() {
        this.$emit('inputTodo', this.todoMsg);
        this.todoMsg = "";
      },

  },
}

//주석제거




</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  width: 100%;
  text-align : left;
  margin: 0 0px;
}

a {
  color: #42b983;
}
</style>
