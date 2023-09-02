<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth-page", "load-page"],
});
</script>
