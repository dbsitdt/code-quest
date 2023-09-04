import { useAuthStore } from "../stores/auth.ts";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore();
  if (from.path === "/login") {
    if (store.isTokenExpired) {
      store.logout();
      return navigateTo("/login", { redirectCode: 301 });
    }
    if (!store.authStatus) {
      return navigateTo("/login", { redirectCode: 301 });
    }
  }

  return;
});
