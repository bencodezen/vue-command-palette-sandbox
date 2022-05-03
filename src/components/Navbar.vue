<script setup></script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/commands">Commands</router-link></li>
    </ul>
  </nav>
</template>

<style>
.navbar-list {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.navbar-list li {
  list-style: none;
  padding: 10px;
}
</style>
