<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import CommandPalette from './components/CommandPalette.vue'
import Counter from './components/Counter.vue'

const displayCommandPalette = ref(true)
const keys = useMagicKeys()

whenever(keys.cmd_k, () => {
  displayCommandPalette.value = !displayCommandPalette.value
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CommandPalette v-if="displayCommandPalette" />
  <Counter />
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
