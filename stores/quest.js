import { acceptHMRUpdate } from "pinia";
export const useQuestStore = defineStore("quest", {
  state: () => {
    return {
      curQuest: {
        title: "",
        cat: "",
        id: "",
      },
      htmlCode: "",
      cssCode: "",
    };
  },
  getters: {
    getHtmlCode: (state) => state.htmlCode,
    getCssCode: (state) => state.cssCode,
    curQuestInfo: (state) => state.curQuest,
  },
  actions: {
    updateHtml(newCode) {
      this.htmlCode = newCode;
    },
    updateCss(newCode) {
      this.cssCode = newCode;
    },
    updateCurQuest(payload) {
      this.curQuest = payload;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useQuestStore, import.meta.hot));
}
