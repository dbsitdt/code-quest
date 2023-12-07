<template>
  <div class="leaderboard-container">
    <p class="error-message" v-if="error">
      There was an error loading the leaderboard. Please try again later ;-;
    </p>
    <div class="leaderboard-header">
      <p>Place</p>
      <p>Username</p>
      <p>Quests</p>
      <p class="rank-header">Rank</p>
    </div>
    <userBoard
      v-for="user in userList"
      :user="{
        questNumber: user.completedQuests.length - 1,
        place: user.place,
        username: user.username,
      }"
      class="user-board"
    ></userBoard>
    {{ res }}
  </div>
</template>

<script setup>
let userList = ref([]);
const error = ref(false);

try {
  const { data } = await useFetch("/api/leaderboard");
  const res = data.value;
  if (res.length === 0) {
    error.value = true;
    throw new Error(`Error in fetching leaderboard!`);
  }
  const people = Object.values(res);
  const sortedPeople = people
    .filter((person) => person.completedQuests.length - 1 > 1 && !person?.test)
    .sort((a, b) => {
      if (a.completedQuests.length < b.completedQuests.length) {
        return 1;
      } else if (a.completedQuests.length > b.completedQuests.length) {
        return -1;
      } else if (a.completedQuests.length > b.completedQuests.length) {
        return 0;
      }
    });
  let placeIndex = 0;
  const rankedPeople = sortedPeople.map((person, index) => {
    if (
      index > 0 &&
      person.completedQuests.length ===
        sortedPeople[index - 1].completedQuests.length
    ) {
      person.place = sortedPeople[index - 1].place;
      placeIndex = sortedPeople[index - 1].place;
    } else {
      person.place = placeIndex + 1;
      placeIndex++;
    }
    return person;
  });
  const cutOff = rankedPeople.findIndex((person) => person.place > 20);
  userList = rankedPeople.slice(0, cutOff == -1 ? rankedPeople.length : cutOff);
} catch (err) {
  error.value = true;
}
definePageMeta({
  middleware: ["auth-page"],
});
useHead({
  title: `Leaderboard - Code Quest`,
});
</script>

<style scoped>
.user-board:nth-of-type(odd) {
  background-color: var(--bg-dark);
}
.user-board:nth-of-type(even) {
  background-color: #191b1e;
}
.leaderboard-container {
  padding: 3vh 5vw;
}
.leaderboard-header {
  color: #7c7c7c;
  padding: 10px;

  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.7fr;
  gap: 0.4rem;
  font-size: 18px;
}

.rank-header {
  display: none;
}
@media (min-width: 500px) {
  .leaderboard-header {
    grid-template-columns: 1fr 1.5fr 0.7fr 1.5fr;
  }
  .rank-header {
    display: inline-block;
  }
}
@media (min-width: 1000px) {
  .leaderboard-header {
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
  }
}
.error-message {
  color: red;
}
</style>
