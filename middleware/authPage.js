import { useAuthStore } from "../stores/auth.ts";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore();
  if (store.isTokenExpired) {
    store.logout();
    return navigateTo("/login", { redirectCode: 301 });
  }
  if (!store.authStatus) {
    const autoLoginSuccess = await store.tryLogin();
    if (!autoLoginSuccess) {
      return navigateTo("/login");
    }
  }

  return;
});
