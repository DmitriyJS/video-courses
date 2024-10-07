<template>
  <div>adsfsss{{ testim }}</div>
  <p @click="changeTestim">go to fuckpage</p>
  <input type="text" v-model="testim" class="bg-lime-400" />
</template>

<script setup lang="ts" >
useHead({ title: "sssssss" });
const testim = useState("testim");

const router = useRouter();
const changeTestim = () => {
  router.push(`/fuckpage`);
};
</script>
<style>
input {
  background: rgb(178, 189, 178);
}
</style>