<template>
  <div class="all-routes">
    <NuxtLink :to="route.path" v-for="route in allRoutes">{{
      route.name
    }}</NuxtLink>
  </div>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useWebsiteStore } from "./stores/website";
const website = useWebsiteStore();
console.log(website.description, `dd`);
website.description = `asdasd`;

const router = useRouter();
const route = useRoute();
const allRoutes = computed(() => {
  return router.getRoutes();
});
console.log(123, router.getRoutes());
</script>

<style>
.all-routes {
  display: flex;
  gap: 8px;
}

.all-routes a {
  border: 1px solid green;
}
</style>