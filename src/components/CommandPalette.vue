<script setup>
import { computed, ref } from 'vue'

const commandFilterText = ref('')
const commandList = ref([
  { id: 123, title: 'Command Onigiri 1', alias: [], hotkeys: [] },
  { id: 456, title: 'Command Karaage 2', alias: [], hotkeys: [] },
  { id: 789, title: 'Command Bento 3', alias: [], hotkeys: [] }
])

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
      <li v-for="command in commandListFiltered" :key="command.id">
        {{ command.title }}
      </li>
    </ul>
  </div>
</template>

<style></style>
