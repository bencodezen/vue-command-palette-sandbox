import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useCommandStore = defineStore('CommandStore', {
  state: () => ({
    commandList: []
  }),
  getters: {
    completeList: state => {
      const completeCommandList = []

      state.commandList.forEach(command => {
        completeCommandList.push({
          id: uuidv4(),
          title: command.title,
          origin: 'Primary command',
          function: command.command
        })

        if (command.aliasList.length > 0) {
          command.aliasList.forEach(alias => {
            completeCommandList.push({
              id: uuidv4(),
              title: alias,
              origin: command.title,
              function: command.command
            })
          })
        }
      })

      return completeCommandList
    }
  }
})
