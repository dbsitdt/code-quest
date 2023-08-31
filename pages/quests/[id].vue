<template>
  <canvas ref="cofetti" teleport="body"></canvas>
  <div class="quest-container">
    <div class="left-col">
      <div class="instructions">
        <p class="instructionTitle" v-if="expanded">Instructions:</p>
        <div class="instructions-text">
          <svg
            :style="tickStyles"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM24.885 11.37L15 21.255L11.115 17.385L9 19.5L15 25.5L27 13.5L24.885 11.37Z"
            />
          </svg>
          <p :style="instructionStyles">
            {{ currentInstruction }}
          </p>
        </div>
        <p v-if="error">{{ error }}</p>
        <p v-if="completedQuest">{{ completeMessage }}</p>
        <quest-button v-if="!completedStep && expanded" @click="submitCode"
          >Submit</quest-button
        >

        <quest-button
          @click="nextStep"
          v-else-if="completedStep && !completedQuest"
          >Next Step</quest-button
        >
        <quest-button v-if="completedQuest && expanded" @click="nextQuest"
          >Next Quest</quest-button
        >
        <div class="controls">
          <div class="height-control" @click="changeHeight">
            <img v-if="expanded" src="../../assets/Quests/dropup.svg" />
            <img v-else src="../../assets/Quests/dropdown.svg" />
            <p v-if="expanded">Minimize</p>
            <p v-else>Expand</p>
          </div>
          <!-- <div class="reset-control" @click="resetQuest">
            <p>Reset Quest</p>
          </div> -->
        </div>
      </div>
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
import htmlIDE from "../../components/QuestsGlobal/htmlIDE.vue";
import cssIDE from "../../components/QuestsGlobal/cssIDE.vue";
import type { CSSProperties } from "vue";
import { useQuestStore } from "../../stores/quest.js";
import confetti from "canvas-confetti";

const route = useRoute();
const questId = route.params.id;
try {
  const test = await import(`../../checks/${questId}.js`);
} catch (err) {
  throw createError({
    statusCode: 404,
    statusMessage: `Quest not found bruh`,
    fatal: true,
  });
}
const { default: questInfo } = await import(`../../checks/${questId}.js`);
const { defaultCode, steps, title, category } = questInfo;
// console.log(steps[0].instruction);
const step = ref(1);
const currentStep = computed(() => steps[step.value - 1]);
const currentInstruction = computed(
  () => `(Step ${step.value}) ${currentStep.value.instruction}`
);
const store = useQuestStore();
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
const error: Ref<null | string> = ref(null);
const completeMessage: Ref<null | string> = ref(null);
const completedQuest: Ref<Boolean> = ref(false);
const completedStep: Ref<Boolean> = ref(false);
const tickStyles = computed(() => {
  return {
    fill: completedStep.value ? "hsla(96, 36%, 58%, 1)" : "#BBBBBB",
  };
});
const nextStep = function () {
  step.value++;
  error.value = null;
  completeMessage.value = null;
  completedStep.value = false;
};
const tests = computed(() => currentStep.value.tests);
const submitCode = function () {
  const doc = outputFrame.value.frame.contentWindow.document.body;
  let errorFound = false;
  for (const test of tests.value) {
    const testRes = test.testFunc(doc);
    if (!testRes) {
      error.value = test.error;
      completeMessage.value = "";
      errorFound = true;
      break;
    }
  }
  if (!errorFound) {
    error.value = "";
    completedStep.value = true;
    if (step.value === steps.length) {
      completeMessage.value =
        "Well Done! Click the button below to move on to the next quest";
      completedQuest.value = true;
      completeMessage;
    }
  }
};
const cofetti: any = ref(null);
watch(completedQuest, () => {
  const myConfetti = confetti.create(cofetti.value, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 180,
    startVelocity: 30,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
});
const expanded: Ref<Boolean> = ref(true);
const changeHeight = function (): void {
  expanded.value = !expanded.value;
};

const nextQuest = async function () {
  const cutId = Number(questId.slice(1, questId.length));
  await navigateTo({ path: `${questId.slice(0, 1)}${cutId + 1}` });
};
const instructionStyles = computed(function (): CSSProperties {
  return {
    textOverflow: expanded.value ? "clip" : "ellipsis",
    overflow: expanded.value ? "wrap" : "hidden",
    whiteSpace: expanded.value ? "normal" : "nowrap",
  };
});
const resetQuest = function () {
  step.value = 1;
  store.updateHtml(defaultCode.htmlCode);
  store.updateCss(defaultCode.cssCode);
  console.log(htmlCode.value);
};
definePageMeta({
  layout: "quests",
  middleware: ["load-quest"],
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
  background: #062b56;
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
