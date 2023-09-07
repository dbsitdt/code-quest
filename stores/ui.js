import { acceptHMRUpdate } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => {
    return {
      navProfileOn: false,
    };
  },
  getters: {
    getProfileNavStatus(state) {
      return state.navProfileOn;
    },
  },
  actions: {
    toggleProfile() {
      this.navProfileOn = !this.navProfileOn;
    },
    closeProfile() {
      this.navProfileOn = false;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUiStore, import.meta.hot));
}
