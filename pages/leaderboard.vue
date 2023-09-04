<template>
  <div class="leaderboard-container">
    <p class="error-message" v-if="error">
      There was an error loading the leaderboard. Please try again later ;-;
    </p>
    <div class="leaderboard-header">
      <p>Place</p>
      <p>Username</p>
      <p>Quests</p>
      <p>Rank</p>
    </div>
    <leaderboard-entry
      v-for="(user, i) in userList"
      :user="{
        questNumber: user.completedQuests.length,
        place: i + 1,
        username: user.username,
      }"
    ></leaderboard-entry>
  </div>
</template>

<script setup>
let userList = ref([]);
const error = ref(false);

try {
  const res = await $fetch(
    `https://code-quest-74ced-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
  );
  const people = Object.values(res);
  people.sort((a, b) => {
    if (a.completedQuests.length < b.completedQuests.length) {
      return 1;
    } else if (a.completedQuests.length > b.completedQuests.length) {
      return -1;
    } else if (a.completedQuests.length > b.completedQuests.length) {
      return 0;
    }
  });
  console.log(people);
  userList = people;
} catch (err) {
  console.error(err);
  error = true;
}
console.log(userList);
definePageMeta({
  middleware: ["auth-page"],
});
</script>

<style scoped>
.leaderboard-container {
  padding: 3vh 5vw;
}
.leaderboard-header {
  color: #7c7c7c;
  padding: 10px;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
  font-size: 18px;
}
.error-message {
  color: red;
}
</style>
