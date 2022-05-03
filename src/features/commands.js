import { ref } from 'vue'

export const register = config => {
  commandList.value.push({
    id: 357,
    title: config.name,
    command: config.function
  })
}

export const commandList = ref([
  {
    id: 456,
    title: 'Command Karaage 2',
    alias: [],
    hotkeys: [],
    command: undefined
  },
  {
    id: 789,
    title: 'Command Bento 3',
    alias: [],
    hotkeys: [],
    command: undefined
  }
])
