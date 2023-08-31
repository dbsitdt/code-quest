<template>
  <div
    class="thumbnail"
    :style="{
      borderTopColor: borderColor,
      backgroundColor: active ? '#202525' : '#131616',
    }"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const props = defineProps(["borderColor", "active"]);
</script>
<style scoped>
.thumbnail {
  background-color: #131616;
  padding: 0.7rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style: solid;
  cursor: pointer;
  border-top-width: 2px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: white;
  font-family: "Poppins";
  font-size: 1rem;
}
</style>
