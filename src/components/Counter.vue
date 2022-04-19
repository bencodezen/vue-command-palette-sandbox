<script setup>
import counter from '../features/counter'
</script>

<template>
  <h2>Counter</h2>
  <p>{{ counter.currentCount }}</p>
  <button @click="counter.incrementCount">+</button>
</template>

<style></style>
