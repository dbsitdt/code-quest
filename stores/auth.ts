import { acceptHMRUpdate } from "pinia";
import { useUserStore } from "./user.ts";
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
    };
  },
  getters: {
    authStatus(state) {
      return state.loggedIn;
    },
    getToken(state) {
      return state.token;
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
        await this.setUser({ token: res.idToken, userId: res.localId });
        this.loggedIn = true;
      } catch (err: any) {
        throw err;
      }
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
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
