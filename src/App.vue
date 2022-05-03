<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useCommandStore } from './stores/CommandStore'
import CommandPalette from './components/CommandPalette.vue'

const displayCommandPalette = ref(false)
const keys = useMagicKeys()

const commandStore = useCommandStore()

whenever(keys.Escape, () => {
  if (displayCommandPalette.value) {
    displayCommandPalette.value = false
  }
})

whenever(keys.cmd_k, () => {
  displayCommandPalette.value = !displayCommandPalette.value
})

commandStore.commandList.forEach(item => {
  if (item.hotkeys.length > 0) {
    item.hotkeys.forEach(hotkey => {
      whenever(keys[hotkey], () => {
        if (item.command) {
          item.command()
        }
      })
    })
  }
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
  <CommandPalette
    v-show="displayCommandPalette"
    :displayed="displayCommandPalette"
  />
</template>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
