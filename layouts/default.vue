<template>
  <div
    class="p-12 bg-blue-100 w-full h-full min-h-screen flex flex-col items-center"
  >
    <header class="h-24 bg-fuchsia-500 w-full flex justify-center items-center">
      <h1>header</h1>
    </header>
    <slot />
    <footer
      class="h-24 bg-fuchsia-500 w-full flex justify-center items-center"
    ></footer>
  </div>
</template>

<style scoped>
/* header {
  position: sticky;
  top: 0;
} */
</style>