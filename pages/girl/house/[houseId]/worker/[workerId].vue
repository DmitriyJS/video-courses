<template>
  <h1>{{ girl.name }}</h1>
  <h1>{{ girl.bestPart }}</h1>
  <h2>{{ time }}</h2>
</template>

<script setup>
const route = useRoute();
const girls = useFuck();
const time = useTime();

const girl = computed(() => {
  return girls.find((fuckingGirl) => fuckingGirl.id == route.params.workerId);
});

onMounted(() => {
  console.log("test", route.params);
  console.log("girls", girls);
});
</script>