import { acceptHMRUpdate } from "pinia";
import { useAuthStore } from "./auth.ts";

interface UserInfo {
  username: string;
  userId: string;
  completedQuests: string[];
  rank: {
    rankName: string;
    rankColor: string;
  };
}
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {
        username: null as String | null,
        completedQuests: [] as string[] | null,
        userId: null as String | null,
        rank: null as {
          rankName: string;
          rankColor: string;
        } | null,
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
        return state.userInfo.completedQuests.length;
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
        await useFetch(`/api/users/updateMe`, {
          method: "PUT",
          body: {
            completedQuests: userInfo.completedQuests,
          },
          headers: {
            Authorization: "Bearer " + token,
          },
        });
      } catch (err) {
        // console.error(err);
        throw new Error("Something went wrong");
      }
    },
    setUserInfo(userInfo: any) {
      this.userInfo.username = userInfo.username;
      this.userInfo.completedQuests = userInfo.completedQuests;
      this.userInfo.userId = userInfo.id;
      this.userInfo.rank = userInfo.rank;
    },
    reset() {
      this.userInfo.username = null;
      (this.userInfo.completedQuests = []), (this.userInfo.userId = null);
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
