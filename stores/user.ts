import { acceptHMRUpdate } from "pinia";
import { useAuthStore } from "./auth.ts";

interface UserInfo {
  username: string;
  profilePicture: string;
  userId: string;
  completedQuests: string[];
}
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {
        username: null as String | null,
        profilePicture: null as String | null,
        completedQuests: [] as string[] | null,
        userId: null as String | null,
      },
    };
  },
  getters: {
    getUserId(state) {
      return state.userInfo.userId;
    },
    getUserInfo(state) {
      return state.userInfo;
    },
    getUserCompletedQuests(): string[] | null {
      return this.getUserInfo.completedQuests;
    },
    numberOfCompletedQuests(state) {
      if (state.userInfo.completedQuests) {
        return state.userInfo.completedQuests.length - 1;
      } else {
        return null;
      }
    },
  },
  actions: {
    async completeQuest(id: any) {
      if (this.userInfo.completedQuests) {
        if (!this.userInfo.completedQuests.includes(id)) {
          this.userInfo.completedQuests.push(id);
          const authStore = useAuthStore();

          await this.updateUserInfo(this.getUserId, authStore.getToken);
        }
      } else {
        return;
      }
    },
    async updateUserInfo(userId: any, token: any) {
      const userInfo = this.getUserInfo;
      try {
        await $fetch(
          `https://code-quest-74ced-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userId}.json?auth=${token}`,
          {
            method: "PUT",
            body: JSON.stringify({
              username: userInfo.username,
              profilePicture: userInfo.profilePicture,
              completedQuests: userInfo.completedQuests,
            }),
          }
        );
      } catch (err) {
        console.error(err);
      }
    },
    setUserInfo(userInfo: UserInfo) {
      this.userInfo.username = userInfo.username;
      this.userInfo.profilePicture = userInfo.profilePicture;
      this.userInfo.completedQuests = userInfo.completedQuests;
      this.userInfo.userId = userInfo.userId;
    },
    reset() {
      this.userInfo.username = null;
      this.userInfo.profilePicture = null;
      (this.userInfo.completedQuests = []), (this.userInfo.userId = null);
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
