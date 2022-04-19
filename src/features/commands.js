import { ref } from 'vue'
import counter from './counter'

export const commandList = ref([
  {
    id: 123,
    title: 'Increment count',
    alias: [],
    hotkeys: ['Cmd_Shift_O'],
    command: counter.incrementCount
  },
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
