<template>
  <iframe ref="frame" id="code"></iframe>
</template>
<script setup>
const props = defineProps(["code"]);
const { code } = toRefs(props);

const frame = ref(null);
defineExpose({ frame });
const renderCode = function (code) {
  frame.value.contentDocument.open();
  frame.value.contentDocument.writeln(code);
  frame.value.contentDocument.close();
};
watch(code, (newCode) => {
  renderCode(newCode);
});
onMounted(() => {
  renderCode(code.value);
});
</script>
<style scoped>
iframe {
  height: 100%;
  width: 100%;
  flex: 1;
  background: white;
  overflow-y: auto;
}
</style>
