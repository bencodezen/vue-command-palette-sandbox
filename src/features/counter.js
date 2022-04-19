import { ref } from 'vue'

const currentCount = ref(0)
const incrementCount = () => {
  currentCount.value++
}

export default {
  currentCount,
  incrementCount
}
