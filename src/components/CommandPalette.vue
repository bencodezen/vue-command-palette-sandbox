<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { commandList } from '../features/commands'

const props = defineProps({
  displayed: {
    type: Boolean,
    default: true
  }
})

const keys = useMagicKeys()
const commandFilterText = ref('')
const hoverItemIndex = ref(0)
const elFilterInput = ref(null)

const commandListFiltered = computed(() => {
  const filterText = commandFilterText.value.toLowerCase()
  return commandList.value.filter(command => {
    return command.title.toLowerCase().includes(filterText)
  })
})

const selectedCommand = computed(() => {
  return commandListFiltered.value[hoverItemIndex.value]
})

watch(props, async cv => {
  if (props.displayed) {
    await nextTick()
    elFilterInput.value.focus()
  }
})

whenever(keys.down, () => {
  if (props.displayed) {
    if (hoverItemIndex.value < commandListFiltered.value.length - 1) {
      hoverItemIndex.value++
    } else {
      hoverItemIndex.value = 0
    }
  }
})

whenever(keys.up, () => {
  if (props.displayed) {
    if (hoverItemIndex.value > 0) {
      hoverItemIndex.value--
    } else {
      hoverItemIndex.value = commandListFiltered.value.length - 1
    }
  }
})

whenever(keys.enter, () => {
  if (props.displayed) {
    if (selectedCommand.value.command) {
      selectedCommand.value.command()
    } else {
      console.log('No command')
    }
  }
})
</script>

<template>
  <div class="command-palette">
    <h1>My Command Palette</h1>
    <input
      ref="elFilterInput"
      type="text"
      v-model="commandFilterText"
      autofocus
    />
    <ul>
      <li
        v-for="(command, index) in commandListFiltered"
        :key="command.id"
        @click="command.command"
        class="command-list-item"
        :class="index === hoverItemIndex ? 'is-hovered' : ''"
      >
        <span>{{ command.title }}</span>
        <span>{{ command.hotkeys }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.command-list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.is-hovered {
  background-color: #eee;
}
</style>
