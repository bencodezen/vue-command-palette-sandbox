<script setup>
import { ref } from 'vue'
import { useCommandStore } from '../stores/CommandStore'

const commandStore = useCommandStore()

const userAliasInputList = ref({})

const addAlias = command => {
  command.aliasList.push(userAliasInputList.value[command.id])
}
</script>

<template>
  <h1>Commands</h1>
  <pre>{{ userAliasInputList }}</pre>
  <ul>
    <li
      v-for="(command, index) in commandStore.commandList"
      :key="command.id"
      style="text-align: left"
    >
      {{ command.title }}
      <div>
        <input type="text" v-model="userAliasInputList[command.id]" />
        <button @click="addAlias(command)">Add alias</button>
      </div>
      <ul>
        <li v-for="alias in command.aliasList" :key="`${command.id}-${alias}`">
          {{ alias }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<style></style>
