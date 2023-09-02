<template>
  <div class="container">
    <div name="quest-category-list" class="quests-container">
      <questAccordion
        class="quest-accordion"
        v-for="cat in questsCat"
        :category="cat"
        :completedQuests="completedQuests"
        :key="cat.categoryName"
      ></questAccordion>
    </div>
    <div class="progress-card-container">
      <profileCard :tasksCompleted="numberOfCompletedQuests" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../../stores/user.ts";
const store = useUserStore();
const completedQuests = computed(() => store.getUserCompletedQuests);
const numberOfCompletedQuests = computed(() => store.numberOfCompletedQuests);
const questsCat = [
  {
    categoryName: "Basic HTML",
    quests: [
      { title: "Changing Tag Content", id: "a1" },
      { title: "Adding tags", id: "a2" },
      { title: "Basic layout", id: "a3" },
      { title: "Adding images", id: "a4" },
      { title: "Using anchor tags for links", id: "a5" },
    ],
  },
];
definePageMeta({
  middleware: ["auth-page"],
});
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 3vh 5vw;
  gap: 3vw;
  flex-direction: column;
  align-items: center;
}
.quests-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order: 2;
  gap: 2rem;
  width: 100%;
}
.progress-card-container {
  width: 100%;
  display: flex;
  order: 1;
}
@media (min-width: 1300px) {
  .container {
    flex-direction: row;
    align-items: flex-start;
  }
  .quests-container {
    display: flex;
    flex-direction: column;

    order: 1;
    gap: 2rem;
    width: 100%;
  }
  .progress-card-container {
    width: 50%;
    order: 2;
  }
}
</style>
