import { useAuthStore } from "../stores/auth.ts";
export default defineNuxtRouteMiddleware(async (to) => {
  const store = useAuthStore();
  if (store.authStatus) {
    return abortNavigation();
  }
  const autoLoginSuccess = await store.tryLogin();
  if (autoLoginSuccess) {
    if (to.path !== "/login") {
      return navigateTo(to.path);
    } else {
      return navigateTo("/quests");
    }
  }
  return;
});
