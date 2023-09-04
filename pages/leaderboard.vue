<template>
  <div class="leaderboard-container">
    <div class="leaderboard-header">
      <p>Place</p>
      <p>Username</p>
      <p>Quests</p>
      <p>Quests/week</p>
      <p>Rank</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth-page"],
});
</script>

<style scoped>
.leaderboard-header {
}
</style>
