<script setup>
</script>

<template>
  <div>
    <router-link class="link" :to="{ name: 'home' }">home</router-link>
    <router-link class="link" :to="{ name: 'register' }">register</router-link>
    <router-link class="link" :to="{ name: 'login' }">login</router-link>
  </div>
</template>

<style scoped>
div {
  margin: 2rem;
  border: 1px solid white;
  display: flex;
  gap: 1rem;
}
.link {
  color: white;
}
</style>