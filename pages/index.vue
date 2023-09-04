<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["unauth-page", "load-page"],
});
</script>
