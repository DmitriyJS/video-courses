export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  console.log(`test middleeware`);
  console.log(`to`, to);
  console.log(`from`, from);

  const test = false;

  if (test) {
    return true;
  } else {
    return navigateTo("/404");
  }
});
