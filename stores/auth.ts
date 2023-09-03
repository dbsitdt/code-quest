import { acceptHMRUpdate } from "pinia";
import { useUserStore } from "./user.ts";

let timer: any;
interface UserInfo {
  username: string;
  profilePicture: string;
  userId: string;
  completedQuests: string[];
}
export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      loggedIn: false,
      token: "",
      userId: "",
      expiresIn: "",
      tokenExpired: false,
    };
  },
  getters: {
    authStatus(state) {
      return state.loggedIn;
    },
    getToken(state) {
      return state.token;
    },
    isTokenExpired(state) {
      return state.tokenExpired;
    },
  },
  actions: {
    async auth(payload: { email: string; password: string }) {
      const {
        public: { authKey },
      } = useRuntimeConfig();
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authKey}`;

      try {
        const res: any = await $fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        });
        const expiresIn = res.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem("token", res.idToken);
        localStorage.setItem("userId", res.localId);
        localStorage.setItem("tokenExpiration", expirationDate.toString());

        timer = setTimeout(() => {
          this.tokenExpired = true;
        }, expiresIn);

        await this.setUser({ token: res.idToken, userId: res.localId });
        this.loggedIn = true;
      } catch (err: any) {
        throw err;
      }
    },
    async tryLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration: string | null =
        localStorage.getItem("tokenExpiration");
      const expiresIn = Number(tokenExpiration) - new Date().getTime();
      if (expiresIn < 0) {
        return false;
      }
      // setTimeout(function () {
      //   context.dispatch("autoLogout");
      // }, expiresIn);
      if (token && userId) {
        await this.setUser({
          token: token,
          userId: userId,
        });
        this.loggedIn = true;

        return true;
      }
      return false;
    },
    async setUser(payload: { token: string; userId: string }) {
      this.token = payload.token;
      this.userId = payload.userId;
      const userInfo: UserInfo | null = await this.loadUserInfo(payload.userId);
      if (userInfo) {
        const userStore = useUserStore();
        userStore.setUserInfo({ ...userInfo, userId: this.userId });
      } else {
        throw new Error(`Failed to load user`);
      }
    },
    async loadUserInfo(userId: string) {
      try {
        const res: UserInfo = await $fetch(
          `https://code-quest-74ced-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json`
        );
        return res;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");
      clearTimeout(timer);

      this.reset();
    },
    reset() {
      this.loggedIn = false;
      this.token = "";
      this.userId = "";
      this.expiresIn = "";
      this.tokenExpired = false;
      const userStore = useUserStore();
      userStore.reset();
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
