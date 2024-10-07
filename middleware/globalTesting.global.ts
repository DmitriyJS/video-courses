export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`test GLOBAL middleeware`);
  console.log(`to`, to);
  console.log(`from`, from);
});
