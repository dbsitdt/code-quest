import { acceptHMRUpdate } from "pinia";
import { useUserStore } from "./user.ts";
import { defineStore } from "pinia";
import { useCookie } from "#imports";
let timer: any;
interface UserInfo {
  username: string;
  userId: string;
  completedQuests: string[];
}
interface State {
  loggedIn: Boolean;
  token: string | null | undefined;
  userId: string | null | undefined;
  tokenExpiration: string | null | undefined;
  tokenExpired: Boolean;
  didAutoAuth: Boolean;
}
export const useAuthStore = defineStore("auth", {
  state: (): State => {
    return {
      loggedIn: false,
      token: "",
      userId: "",
      tokenExpiration: "",
      tokenExpired: false,
      didAutoAuth: false,
    };
  },
  getters: {
    authStatus(state) {
      return state.loggedIn;
    },
    ifAutoAuth(state) {
      return state.didAutoAuth;
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
      try {
        const { data } = await useFetch("/api/authPost", {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        });
        const res: any = data.value;

        const expiresIn = res.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;
        const tokenRef = useCookie("token");
        tokenRef.value = res.idToken;
        this.token = tokenRef.value;
        const userIdRef = useCookie("userId");
        userIdRef.value = res.localId;
        this.userId = userIdRef.value;
        const tokenExpirationRef = useCookie("tokenExpiration");
        tokenExpirationRef.value = expirationDate.toString();
        this.tokenExpiration = tokenExpirationRef.value;

        timer = setTimeout(() => {
          this.tokenExpired = true;
        }, expiresIn);

        await this.setUser({ token: res.idToken, userId: res.localId });
        this.loggedIn = true;
      } catch (err: any) {
        throw err;
      }
    },
    setAutoAuth(status: Boolean) {
      this.didAutoAuth = status;
    },
    async tryLogin() {
      const token = useCookie("token");
      const userId = useCookie("userId");
      const tokenExpiration = useCookie("tokenExpiration");
      if (!token.value || !userId.value || !tokenExpiration.value) return false;
      const expiresIn = Number(tokenExpiration.value) - new Date().getTime();
      if (expiresIn < 0) {
        return false;
      }
      // setTimeout(function () {
      //   context.dispatch("autoLogout");
      // }, expiresIn);

      if (token && userId) {
        await this.setUser({
          token: token.value,
          userId: userId.value,
        });
        this.loggedIn = true;
        return true;
      }
      return false;
    },
    async setUser(payload: {
      token: string | null | undefined;
      userId: string | null | undefined;
    }) {
      if (!payload.token || !payload.userId)
        throw new Error(`Failed to load user`);
      this.token = payload.token;
      this.userId = payload.userId;
      const userInfo: UserInfo | any = await this.loadUserInfo(payload.userId);
      if (userInfo) {
        const userStore = useUserStore();
        userStore.setUserInfo({ ...userInfo, userId: this.userId });
      } else {
        throw new Error(`Failed to load user`);
      }
    },
    async loadUserInfo(userId: string) {
      try {
        const { data } = await useFetch(`/api/userQuery?userId=${userId}`);
        const res = data.value;
        return res;
      } catch (err) {
        return null;
      }
    },
    logout() {
      // remove cookies?
      const tokenRef = useCookie("token");
      const tokenExpirationRef = useCookie("tokenExpirationRef");
      const userIdRef = useCookie("userId");
      tokenRef.value = null;
      tokenExpirationRef.value = null;
      userIdRef.value = null;

      clearTimeout(timer);

      this.reset();
    },
    reset() {
      this.loggedIn = false;
      this.token = "";
      this.userId = "";
      this.tokenExpiration = "";
      this.tokenExpired = false;
      const userStore = useUserStore();
      userStore.reset();
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
