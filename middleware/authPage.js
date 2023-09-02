import { useAuthStore } from "../stores/auth.ts";
export default defineNuxtRouteMiddleware(async (to) => {
  const store = useAuthStore();
  if (!store.authStatus) {
    return navigateTo("/login", { redirectCode: 301 });
  }
  return;
});
