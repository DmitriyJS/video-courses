<template>
  <div class="girls-slug-mf">
    <h1>{{ girl.name || 123 }}</h1>
    <h1>{{ girl.bestPart || 3123 }}</h1>
  </div>
</template>

<script setup>
const route = useRoute();
const girls = useFuck();
const time = useTime();

const girl = computed(() => {
  return girls.find(
    (fuckingGirl) => fuckingGirl.id == (route.params.workerId || true)
  );
});

onMounted(() => {
  console.log("test", route.params);
  console.log("girls", girls);
});
</script>