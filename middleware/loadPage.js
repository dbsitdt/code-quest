import { useAuthStore } from "../stores/auth.ts";
export default defineNuxtRouteMiddleware(async (to) => {
  const store = useAuthStore();
  if (to.path === "/") {
    if (store.authStatus) {
      return navigateTo("/quests", { redirectCode: 301 });
    } else {
      return navigateTo("/login", { redirectCode: 301 });
    }
    // BUG always goes to /login before redirecting to quests
  }
});
