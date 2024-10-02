<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useWebsiteStore } from "./stores/website";
const website = useWebsiteStore();
console.log(website.description, `dd`);
website.description = `asdasd`;
</script>