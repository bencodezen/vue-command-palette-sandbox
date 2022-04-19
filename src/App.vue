<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import CommandPalette from './components/CommandPalette.vue'

const displayCommandPalette = ref(false)
const keys = useMagicKeys()

watch(keys.Cmd_K, isPressed => {
  if (isPressed) {
    displayCommandPalette.value = !displayCommandPalette.value
  }
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CommandPalette v-if="displayCommandPalette" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
