<template>
  <div id="app">
    <section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<TodoInput/>
			</header>
			<section class="main">

				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
        <TodoList/>
			</section>
      <TodoFooter/>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
			<p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components : {TodoFooter, TodoInput, TodoList},
}
</script>
<style>
</style>
