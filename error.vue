<template>
  <NuxtLayout>
    <div>
      <h3>{{ error.statusCode }}</h3>
      <p>Hi</p>
    </div>
  </NuxtLayout>
</template>
<script setup>
defineProps(["error"]);
</script>
