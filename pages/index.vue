<template>
  <div>
    <div>adsfsss{{ testim }}</div>
    <p @click="changeTestim">go to fuckpage</p>
    <input type="text" v-model="testim" class="bg-lime-400" />
    <NuxtLink class="bg-slate-200 bg-teal-400" :to="firstLesson.path"
      >Go to 1st lesson</NuxtLink
    >
  </div>
</template>

<script setup lang="ts" >
useHead({ title: "sssssss" });
const testim = useState("testim");
const firstLesson = useFirstLesson();

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