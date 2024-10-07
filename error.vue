<template>
  <NuxtLayout name="error">
    <div v-if="err">
      <h1>{{ err?.statusCode }}</h1>
      <p>{{ err.message }}6123</p>
      <NuxtLink to="/">Go back to home</NuxtLink>
    </div>
    <button @click="handleError">resolving erroor</button>
  </NuxtLayout>
</template>

<script setup>
const err = useError();

const handleError = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>