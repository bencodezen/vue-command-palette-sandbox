<script setup>
import { ref } from 'vue'
import { register } from '../features/commands'

const taskList = ref([1, 2, 3])

const addItem = () => {
  taskList.value.push(4)
}

register({
  name: 'Add item to todo list',
  function: addItem
})
</script>

<template>
  <h2>Todo</h2>
  <ul>
    <li v-for="task in taskList" :key="`task-${task}`">
      {{ task }}
    </li>
  </ul>
</template>

<style></style>
