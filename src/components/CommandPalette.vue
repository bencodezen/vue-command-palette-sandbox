<script setup>
import { computed, nextTick, ref, watch } from 'vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useCommandStore } from '../stores/CommandStore'

const props = defineProps({
  displayed: {
    type: Boolean,
    default: true
  }
})

const commandStore = useCommandStore()

const keys = useMagicKeys()
const commandFilterText = ref('')
const hoverItemIndex = ref(0)
const elFilterInput = ref(null)

const commandListFiltered = computed(() => {
  const filterText = commandFilterText.value.toLowerCase()
  return commandStore.completeList.filter(command => {
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
  <div class="command-palette-overlay">
    <section class="command-palette">
      <input
        class="command-palette-input"
        ref="elFilterInput"
        type="text"
        v-model="commandFilterText"
        placeholder="Select a command..."
        autofocus
      />
      <ul class="command-palette-list">
        <li
          v-for="(command, index) in commandListFiltered"
          :key="command.id"
          @click="command.command"
          class="command-list-item"
          :class="index === hoverItemIndex ? 'is-hovered' : ''"
        >
          <span
            >{{ command.title }}<br /><span style="font-size: 0.8rem">{{
              command.origin
            }}</span></span
          >
          <span>{{ command.hotkeys }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
.command-palette {
  position: relative;
  width: 80%;
  max-height: 80%;
  margin-top: 30px;
  border-radius: 6px;
  padding: 10px;
  background-color: white;
}

.command-palette-input {
  width: 100%;
  padding: 10px;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.command-palette-list {
  margin: 0;
  padding: 0;
}

.command-palette-overlay {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
}

.command-list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.is-hovered {
  background-color: #eee;
}
</style>
