<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth", "load-page"],
});
</script>
