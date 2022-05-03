import { useCommandStore } from '../stores/CommandStore'
import { v4 as uuidv4 } from 'uuid'

export const register = config => {
  const commandStore = useCommandStore()

  commandStore.commandList.push({
    id: uuidv4(),
    title: config.name,
    command: config.function,
    aliasList: []
  })
}
