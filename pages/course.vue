<template>
  <div class="prose mb-12">
    <h1>
      <span class="font-medium">
        Course:
        <span class="font-bold">Mastering Nuxt 3</span>
      </span>
    </h1>
  </div>

  <div class="flex flex-row justify-center flex-grow">
    <div
      class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
    >
      <h3>Chapters</h3>
      <div v-for="chapter in chapters">
        <h4>{{ chapter.title }}</h4>
        <NuxtLink
          :to="lesson.path"
          class="flex flex-row space-x-1 no-underline prose-sm font-normal py-1 px-4 -mx-4"
          v-for="(lesson, index) in chapter.lessons"
          :key="lesson.slug"
          ><span class="text-gray-500">{{ index + 1 }}.</span>
          <span>{{ lesson.title }}</span></NuxtLink
        >
      </div>
    </div>

    <div class="prose p-12 bg-red-100 rounded-md w-[65ch] rara">
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          oh fuck!!! somthing wrong!!!
          <code>{{ error }}</code>
          <button @click="resetError(error)" class="bg-green-500">reset</button>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
  {{ girl }}
</template>

<script setup lang="ts">
const { chapters } = useCourse();
const girl = useFuck();

const resetError = async (error: { value: null }) => {
  await navigateTo(
    "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3"
  );
  error.value = null;
};

onMounted(() => {
  console.log(`qqq`, chapters);
});

// definePageMeta({
//   layout: "custom",
// });
</script>

<style scoped>
.router-link-active {
  /* color: red; */
  @apply text-blue-500;
}
</style>