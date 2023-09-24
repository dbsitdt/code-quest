<template>
  <header>
    <TheMainNav @toggle-sidebar="toggleSidebar" />
  </header>
  <div class="container" @click="closeUIs">
    <TheSidebar @close-sidebar="toggleSidebar" :sidebarOpened="sidebarOpened" />
    <div class="content"><slot></slot></div>
  </div>
</template>

<script setup>
import { useUiStore } from "../stores/ui.js";
const store = useUiStore();
const sidebarOpened = ref(true);
const toggleSidebar = function () {
  sidebarOpened.value = !sidebarOpened.value;
};

onMounted(() => {
  if (window.innerWidth < 800) sidebarOpened.value = false;
  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth < 800) {
      sidebarOpened.value = false;
    } else {
      sidebarOpened.value = true;
    }
  });
});
const closeUIs = function () {
  store.closeProfile();
};
</script>
<style scoped>
.container {
  display: flex;
  height: 90vh;
  position: relative;
}
.content {
  flex: 1;
  width: 100%;
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
}
div#__nuxt,
#__layout,
#__layout > div,
#app {
  height: 100vh;
  background-color: #2a2d32;
}
p,
a,
h1,
h2,
h3,
h4,
h5,
h6,
button,
label {
  font-family: "Poppins", sans-serif;
}
</style>
