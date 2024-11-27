<template>
  <div class="all-routes">
    test
    <input type="file" class="yahh" accept="image/*" multiple />
    <NuxtLink :to="route.path" v-for="route in allRoutes">{{
      route.name
    }}</NuxtLink>
  </div>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <div>
    <div id="reader" style="width: 500px"></div>
    <p v-if="decodedText">Распознанный код: {{ decodedText }}</p>
    <button @click="startScanner">start сканер</button>
  </div>
</template>

<script setup lang="ts">
import { Html5Qrcode } from "html5-qrcode";
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

const decodedText = ref("");
// Сканер и контейнер
let scanner = null;
const containerId = "reader";

function startScanner() {
  scanner = new Html5Qrcode(containerId);

  const config = { fps: 10, qrbox: { width: 250, height: 250 } };

  scanner
    .start(
      { facingMode: "environment" }, // Камера устройства
      config,
      (decodedResult) => {
        console.log("Декодированный текст:", decodedResult);
        decodedText.value = decodedResult; // Сохраняем результат
        stopScanner();
      },
      (error) => {
        console.warn("Ошибка сканирования:", error);
      }
    )
    .catch((err) => {
      console.error("Ошибка инициализации сканера:", err);
    });
}

function stopScanner() {
  if (scanner) {
    scanner.stop().then(() => {
      console.log("Сканер остановлен");
    });
  }
}
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