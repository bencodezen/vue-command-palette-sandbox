import { defineStore } from 'pinia'

export const useCommandStore = defineStore('CommandStore', {
  state: () => ({
    commandList: []
  })
})
