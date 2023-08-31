export default defineNuxtRouteMiddleware(async (to, from) => {
  if (to.path === "/") {
    return navigateTo("/quests", { redirectCode: 301 });
  }
});
