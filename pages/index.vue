<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["load-page"],
});
</script>
