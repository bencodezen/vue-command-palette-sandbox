<script setup>
import { ref } from 'vue'
import { register } from '../features/commands'

const currentCount = ref(0)
const incrementCount = () => {
  currentCount.value++
}

register({
  name: 'Increment count',
  function: incrementCount
})
</script>

<template>
  <h2>Counter</h2>
  <p>{{ currentCount }}</p>
  <button @click="incrementCount">+</button>
</template>

<style></style>
