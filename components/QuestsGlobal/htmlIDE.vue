<template>
  <div>
    <codemirror
      v-model="code"
      placeholder="HTML Code..."
      class="html-editor"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :disabled="disabled"
      :style="style"
      @update:modelValue="updated"
      @ready="handleReady"
    />
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
export default defineComponent({
  components: {
    Codemirror,
  },
  props: ["defaultCode", "disabled"],
  setup(props, context) {
    const code = ref(`${props.defaultCode ? props.defaultCode : ""}`);
    const disabled = ref(props.disabled);
    const style = computed(() => {
      return {
        cursor: disabled.value ? "not-allowed" : "inherit",
      };
    });
    const extensions = [html(), oneDark];

    // Codemirror EditorView instance ref
    const view = shallowRef();
    const handleReady = (payload) => {
      view.value = payload.view;
    };

    const updated = function (value) {
      context.emit("code-updated", value);
    };
    return {
      code,
      extensions,
      handleReady,
      log: console.log,
      updated,
      style,
      disabled,
    };
  },
});
</script>

<style scoped>
.cm-editor {
  text-align: left;
  height: 100%;
}
.cm-scroller {
  overflow: auto;
}
</style>
