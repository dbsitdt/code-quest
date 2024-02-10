<template>
  <teleport to="body">
    <transition name="modal">
      <dialog v-if="show" :open="show" teleport="body"><slot></slot></dialog>
    </transition>
    <transition name="overlay">
      <div v-if="show" class="overlay"></div>
    </transition>
  </teleport>
</template>
<script setup>
const props = defineProps(["show"]);
const { show } = toRefs(props);
</script>
<style scoped>
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active,
.overlay-leave-active {
  transition: all 300ms ease-in-out; /*Vue reads the duration from here*/
}
.overlay-enter-to,
.overlay-leave-from {
  opacity: 1;
}
.modal-enter-from {
  opacity: 0;
  transform: translate(-50%, -60%);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 400ms ease-in-out; /*Vue reads the duration from here*/
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%);
}
.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -40%);
}
dialog {
  width: clamp(500px, 50%, 870px);
  border: none;
  background: var(--bg-dark);
  color: white;
  padding-inline: 4vw;
  padding-block: 4vw;
  border-radius: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(70, 70, 70, 0.295);
  z-index: 1;
  top: 0;
  left: 0;
}
</style>
