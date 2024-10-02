export default () => {
  const timeNow = ref<number>(0);
  onMounted(() => {
    timeNow.value = new Date().getDate();
  });

  return timeNow;
};
