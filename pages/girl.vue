<template>
  <div class="my-content">
    <nav class="">
      <ul>
        <li v-for="girl in girls">
          <NuxtLink :to="`/girl/house/asdf/worker/${girl.id}`">{{
            girl.name
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="nuxt-page-wrapper"><NuxtPage /></div>
  </div>
</template>

<script setup>
const girls = useFuck();
</script>

<style scoped>
nav {
  width: 250px;
  min-width: 250px;
  background: rgb(218, 121, 121);
}
.my-content {
  display: flex;
  gap: 48px;
  width: 100%;
}
</style>