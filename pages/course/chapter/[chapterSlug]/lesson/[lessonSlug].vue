<template>
  <div class="lesson-slug-mf">
    <p class="mt-0 uppercase font-bold text-slate-400 mb-1">
      Lesson {{ chapter.number }} - {{ lesson.number }}
    </p>
    <h2 class="my-0">{{ lesson.title }}</h2>
    <div class="flex space-x-4 mt-2 mb-8">
      <NuxtLink
        v-if="lesson.sourceUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.sourceUrl"
      >
        Download Source Code
      </NuxtLink>
      <NuxtLink
        v-if="lesson.downloadUrl"
        class="font-normal text-md text-gray-500"
        :to="lesson.downloadUrl"
      >
        Download Video
      </NuxtLink>
    </div>
    <VideoPlayer v-if="lesson.videoId" :videoId="lesson.videoId" />
    <p>{{ lesson.text }}</p>
    <ClientOnly>
      <!-- CientOnly говорит, что нужно рендерить только на клиенте, потому что иначе инфа может быть указанной по умолчанию из-за гидрации -->
      <!-- еще можно файлам которые должны рендериться на клиенте поставить постфикс client. FileName.client.vue -->
      <!-- <LessonCompleteButton
        :modelValue="isLessonComplete"
        @update:modelValue="throw createError('cant update');"
      /> -->
      <LessonCompleteButton
        :modelValue="isLessonComplete"
        @update:modelValue="toggleComplete"
      />
    </ClientOnly>

    <MyInputFuck v-model="fuckInput" />
  </div>
</template>

<script setup lang="ts">
// import { ref, onMounted } from "vue"; типо можно не импортить
const course = useCourse();
const route = useRoute();

definePageMeta({
  middleware({ params }, from) {
    const course = useCourse();
    const chapter = course.chapters.find(
      (chapter) => chapter.slug === params.chapterSlug
    );
    if (!chapter)
      return abortNavigation(
        createError({
          statusCode: 404,
          message: "Chapter not foun11d",
        })
      );

    const lesson = chapter.lessons.find(
      (lesson) => lesson.slug === params.lessonSlug
    );
    if (!lesson) {
      console.log(8521);

      throw abortNavigation(
        createError({
          statusCode: 404,
          message: "Lesson not found 777555555777",
        })
      );
    }
  },
  // validate({ params }) {
  //   const course = useCourse();
  //   const chapter = course.chapters.find(
  //     (chapter) => chapter.slug === params.chapterSlug
  //   );
  //   if (!chapter)
  //     return createError({
  //       statusCode: 404,
  //       message: "Chapter not foun11d",
  //     });

  //   const lesson = chapter.lessons.find(
  //     (lesson) => lesson.slug === params.lessonSlug
  //   );
  //   if (!lesson) {
  //     throw createError({
  //       statusCode: 404,
  //       message: "Lesson not found 777555555777",
  //     });
  //   }
  //   return true;
  // },
});

if (route.params.lessonSlug === "3-typing-component-events") {
  console.log;
  route.params.paramthatdoesnotexistwhoops.capitalizeIsNotAMethod()();
}

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

// if (!chapter.value) {
//   console.log(1231231231);

//   throw createError({
//     statusCode: 404,
//     message: "Chapter not found",
//   });
// }

const lesson = computed(() => {
  return chapter.value?.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});

// if (!lesson.value) {
//   console.log(1231231231);

//   throw createError({
//     statusCode: 404,
//     message: "Lesson not found",
//   });
// }

const headTitle = computed(() => {
  return `${lesson.value?.title}`;
});

const fuckInput = ref();
// const progress = useState(`progress`, () => []);

const progress = useLocalStorage("progress", []);

const isLessonComplete = computed(() => {
  if (!progress.value[chapter.value?.number - 1]) {
    return false;
  }
  if (!progress.value[chapter.value?.number - 1][lesson.value?.number - 1]) {
    return false;
  }

  return progress.value[chapter.value?.number - 1][lesson.value?.number - 1];
});

const toggleComplete = () => {
  if (!progress.value[chapter.value?.number - 1]) {
    progress.value[chapter.value?.number - 1] = [];
  }
  progress.value[chapter.value?.number - 1][lesson.value?.number - 1] =
    !isLessonComplete.value;
};

useHead({
  // управляет тем, что в теге head https://nuxt.com/docs/api/composables/use-head
  title: headTitle,
});

onMounted(() => {});
</script>