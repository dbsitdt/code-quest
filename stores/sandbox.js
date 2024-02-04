import { acceptHMRUpdate } from "pinia";
export const useSandboxStore = defineStore("sandbox", {
  state: () => {
    return {
      htmlCode: "",
      cssCode: "",
    };
  },
  getters: {
    getHtmlCode: (state) => state.htmlCode,
    getCssCode: (state) => state.cssCode,
  },
  actions: {
    updateHtml(newCode) {
      const safeCode = newCode
        .replaceAll("script", "sscript")
        .replaceAll("iframe", "iiframe")
        .replaceAll("<img", `<img crossorigin="anonymous"`);
      console.log(safeCode);
      this.htmlCode = safeCode;
    },
    updateCss(newCode) {
      this.cssCode = newCode;
    },
  },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSandboxStore, import.meta.hot));
}
