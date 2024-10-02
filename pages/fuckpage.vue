<template>
  <div>fuuuuuuuck!!!!!!</div>
  <h1>{{ testim }}</h1>
  <input type="text" v-model="aga" @input="testFunc" />
  <p @click="$router.push('/')">go to main</p>
</template>

<script setup>
const testim = useState("testim", () => "agass");
const aga = ref("");

onMounted(() => {
  aga.value = testim.value;
});

const testFunc = () => {
  console.log(123);
  testim.value = aga;
};
</script>