<script setup>
import { computed, ref } from 'vue'
import { commandList } from '../features/commands'

const commandFilterText = ref('')

const commandListFiltered = computed(() => {
  const filterText = commandFilterText.value.toLowerCase()
  return commandList.value.filter(command => {
    return command.title.toLowerCase().includes(filterText)
  })
})
</script>

<template>
  <div class="command-palette">
    <h1>My Command Palette</h1>
    <input type="text" v-model="commandFilterText" />
    <ul>
      <li
        v-for="command in commandListFiltered"
        :key="command.id"
        @click="command.command"
      >
        {{ command.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
