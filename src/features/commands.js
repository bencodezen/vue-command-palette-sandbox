import { useCommandStore } from '../stores/CommandStore'

export const register = config => {
  const commandStore = useCommandStore()

  commandStore.commandList.push({
    id: 357,
    title: config.name,
    command: config.function
  })
}
