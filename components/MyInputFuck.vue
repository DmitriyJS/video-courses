<template>
  <input
    type="text"
    :value="modelValue"
    @input="() => $emit('update:modelValue', modelValue)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
</style>