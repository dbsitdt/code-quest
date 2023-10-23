<template>
  <div>
    <codemirror
      v-model="code"
      placeholder="CSS Code..."
      class="css-editor"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :disabled="disabled"
      :style="style"
      @ready="handleReady"
      @update:modelValue="updated"
    />
  </div>
</template>

<script>
import { Codemirror } from "vue-codemirror";
import { css } from "@codemirror/lang-css";
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
    const extensions = [css(), oneDark];

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

<style>
.cm-editor {
  text-align: left;
  height: 60vh;
}
.cm-scroller {
  overflow: auto;
}
</style>
