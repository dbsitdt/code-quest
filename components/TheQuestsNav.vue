<template>
  <nav>
    <div class="nav-logo">
      <img src="../assets/Nav/itdtlogo.svg" alt="ITDT Logo" />
      <div class="nav-logo-text">
        <p class="quest-title">{{ questTitle }}</p>
        <p class="quest-cat">{{ questCat }}</p>
      </div>
    </div>
    <div class="nav-return">
      <NuxtLink to="/quests">
        <img
          draggable="false"
          src="../assets/Nav/arrow_left.svg"
          alt="Arrow_left"
        />
        <p>Return to Quests</p>
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import { useQuestStore } from "../stores/quest.js";
const store = useQuestStore();
const questTitle = computed(() => store.curQuest.title);
const questCat = computed(() => store.curQuest.cat);
</script>
<style scoped>
nav {
  padding: 2vh 4vw;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  height: 10vh;
  min-height: 4rem;
  background-color: var(--bg-dark);
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.quest-title {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
}
.quest-cat {
  font-size: 13px;
  font-weight: 500;
  color: #dfdfdf;
}
.nav-return a {
  display: flex;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  align-items: center;
}
.nav-return p {
  font-size: 1.2rem;
}
@media (max-width: 700px) {
  .nav-return p {
    display: none;
  }
}
.nav-return img {
  transition: transform 100ms linear;
}
.nav-return:hover img {
  transform: translateX(-10px);
}
</style>
