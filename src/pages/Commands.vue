<script setup>
import { useCommandStore } from '../stores/CommandStore'

const commandStore = useCommandStore()
</script>

<template>
  <h1>Commands</h1>
  <ul>
    <li
      v-for="(command, index) in commandStore.commandList"
      :key="command.id"
      style="text-align: left"
    >
      {{ command.title }}
      <div>
        <input type="text" />
        <button>Add alias</button>
      </div>
      <ul>
        <li>Alias #1</li>
        <li>Alias #2</li>
      </ul>
    </li>
  </ul>
</template>

<style></style>
