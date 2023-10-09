<template>
  <div class="quest-container">
    <div class="left-col">
      <div class="code-tabs">
        <codeTab
          @click="changeActiveIdeTab('html')"
          :active="htmlIdeActive"
          borderColor="#F06529"
          >index.html</codeTab
        >
        <codeTab
          :active="!htmlIdeActive"
          @click="changeActiveIdeTab('css')"
          borderColor="#264DE4"
          >style.css</codeTab
        >
      </div>
      <div class="ide">
        <keep-alive>
          <component
            @code-updated="updateCode"
            :is="htmlIdeActive ? htmlIDE : cssIDE"
            :defaultCode="htmlIdeActive ? htmlCode : cssCode"
        /></keep-alive>
      </div>
    </div>
    <div class="right-col">
      <ideOutput ref="outputFrame" class="output-frame" :code="compiled" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import htmlIDE from "../components/QuestsGlobal/htmlIDE.vue";
import cssIDE from "../components/QuestsGlobal/cssIDE.vue";
import { useSandboxStore } from "../stores/sandbox.js";

const defaultCode = {
  htmlCode: "",
  cssCode: "",
};
// console.log(steps[0].instruction);
const store = useSandboxStore();
store.updateHtml(defaultCode.htmlCode);
store.updateCss(defaultCode.cssCode);

const htmlCode = computed(() => store.htmlCode);
const cssCode = computed(() => store.cssCode);

const htmlIdeActive = ref(true);

const changeActiveIdeTab = function (lang: String): void {
  htmlIdeActive.value = lang === "html";
};

const updateCode = function (newCode: String): void {
  if (htmlIdeActive.value) {
    store.updateHtml(newCode);
  } else {
    store.updateCss(newCode);
  }
};

const compiled = computed(() => {
  return `${htmlCode.value}<style>${cssCode.value}</style>`;
});
const outputFrame: any = ref(null);

definePageMeta({
  layout: "sandbox",
  middleware: ["auth-page"],
});
</script>
<style scoped>
.instructionTitle {
  font-size: 18px;
}
.height-control {
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  font-weight: 400;
  cursor: pointer;
}
.quest-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.instructions-text {
  display: flex;
  gap: 0.5rem;
  font-size: 18px;
  align-items: flex-start;
  width: 100%;
}

.instructions-text svg {
  width: 36px;
  min-width: 36px;
  transition: fill 300ms linear;
}
.left-col {
  width: 37.5%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.right-col {
  width: 62.5%;
  height: 89vh;
  background: blue;
}
.instructions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background: var(--accent-dark);
  color: white;
  flex: 1;
  padding: 1rem;
}
.code-tabs {
  display: flex;
  background: #000;
  padding-left: 1rem;
  padding-top: 1rem;
  gap: 1rem;
  flex: 1;
  height: 7vh;
}

.ide {
  flex: 30;
}
canvas {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.instruction-enter-from {
  opacity: 0;
  transform: translateY(30px); /*Initial state*/
}
.instruction-enter-active {
  transition: all 300ms ease-in-out; /*Vue reads the duration from here*/
}
.instruction-enter-to {
  opacity: 1;
  transform: translateY(0); /*Final state*/
}
.instruction-leave-from {
  opacity: 1;
  transform: translateY(30px);
}
.instruction-move {
  transition: transform 0.8s ease;
}
.instruction-leave-active {
  transition: all 300ms ease-in;
}
.instruction-leave-to {
  opacity: 0;
  transform: translateY(0);
}
.controls {
  color: #adadad;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
/* .reset-control {
  font-size: 0.9rem;
  text-decoration: underline;
  cursor: pointer;
} */
@media (max-width: 800px) {
  .quest-container {
    flex-direction: column;
  }
  .left-col {
    width: 100%;
  }
  .right-col {
    width: 100%;
  }
}
</style>
