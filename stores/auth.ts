import { acceptHMRUpdate } from "pinia";
import { useUserStore } from "./user.ts";
import { defineStore } from "pinia";
import { useCookie } from "#imports";
let timer: any;
interface UserInfo {
  username: string;
  userId: string;
  completedQuests: string[];
  rank: {
    rankName: string;
    rankColor: string;
  };
}
interface State {
  loggedIn: Boolean;
  token: string | null | undefined;
  userId: string | null | undefined;
  tokenExpired: Boolean;
  didAutoAuth: Boolean;
}
export const useAuthStore = defineStore("auth", {
  state: (): State => {
    return {
      loggedIn: false,
      token: "",
      userId: "",
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
  },
  actions: {
    async auth(payload: { email: string; password: string }) {
      try {
        const loginRes = await useFetch("/api/users/login", {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
          }),
        });
        if (loginRes.error.value) throw loginRes.error.value.data;
        const res: any = loginRes.data.value;
        const tokenRef = useCookie("token");
        tokenRef.value = res.token;
        const userIdRef = useCookie("userId");
        userIdRef.value = res.id;
        this.token = tokenRef.value;
        // const userIdRef = useCookie("userId");
        // userIdRef.value = res.localId;
        // this.userId = userIdRef.value;
        await this.setUser({ token: res.token, userId: res.id });
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
      if (!token.value || !userId.value) return false;
      try {
        if (token && userId) {
          await this.setUser({
            token: token.value,
            userId: userId.value,
          });
          this.loggedIn = true;
          return true;
        }
        return false;
      } catch {
        return false;
      }
    },
    async setUser(payload: {
      token: string | null | undefined;
      userId: string | undefined;
    }) {
      if (!payload.token || !payload.userId)
        throw new Error(`Failed to load user`);
      this.token = payload.token;
      const res = await this.loadUserInfo(payload.userId);
      if (!res) throw new Error("Failed to load user info");
      const { data }: any = res;
      const { user: userInfo }: UserInfo | any = data;
      if (userInfo) {
        const userStore = useUserStore();
        userStore.setUserInfo(userInfo);
      } else {
        throw new Error(`Failed to load user`);
      }
    },
    async loadUserInfo(userId: string) {
      try {
        const { data } = await useFetch(`/api/users?id=${userId}`, {
          headers: {
            Authorization: "Bearer " + this.token,
          },
        });
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
      this.tokenExpired = false;
      const userStore = useUserStore();
      userStore.reset();
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
