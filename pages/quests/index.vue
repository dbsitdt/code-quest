<template>
  <div class="container">
    <div class="left-col">
      <h4>{{ splashText }}, {{ username }}!</h4>
      <div class="row"></div>
      <div name="quest-category-list" class="quests-container">
        <questAccordion
          class="quest-accordion"
          v-for="cat in questsCat"
          :category="cat"
          :completedQuests="completedQuests"
          :key="cat.categoryName"
        ></questAccordion>
      </div>
    </div>
    <div class="progress-card-container">
      <profileCard :tasksCompleted="numberOfCompletedQuests" />
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../../stores/user.ts";
import { useAuthStore } from "../../stores/auth.ts";

const authStore = useAuthStore();
if (!authStore.authStatus) {
  const autoLoginSuccess = await authStore.tryLogin();
  if (!autoLoginSuccess) {
    navigateTo("/login");
  }
}
const store = useUserStore();
const completedQuests = computed(() => store.getUserCompletedQuests);
const numberOfCompletedQuests = computed(() => store.numberOfCompletedQuests);
const username = computed(() => store.userInfo.username);

const randomTextCounter = Math.random() * 100;
const splashText = ref("");
onBeforeMounted(() => {
  if (randomTextCounter) {
    if (randomTextCounter < 1) {
      splashText.value = "Today is your lucky day";
    } else if (randomTextCounter < 10) {
      splashText.value = "Welcome back";
    } else if (randomTextCounter < 30) {
      splashText.value = "Hullo";
    } else if (randomTextCounter < 60) {
      splashText.value = "What's up";
    } else if (randomTextCounter < 65) {
      splashText.value = "You're very epic";
    } else if (randomTextCounter < 85) {
      splashText.value = "Hi";
    } else if (randomTextCounter < 100) {
      splashText.value = "Yo";
    }
  }
});

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
.left-col h4 {
  font-size: 40px;
  color: white;
  font-weight: 600;
}
.left-col .row {
  height: 3px;
  width: 100%;
  margin-bottom: clamp(1.2rem, 3vh, 1.5rem);
  background: rgba(255, 255, 255, 0.15);
}
.container {
  width: 100%;
  display: flex;
  padding: 3vh 5vw;
  gap: 3vw;
  flex-direction: column;
  align-items: center;
}
.left-col {
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.quests-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
