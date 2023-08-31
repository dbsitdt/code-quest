<template>
  <div class="container">
    <div name="quest-category-list" class="quests-container">
      <questAccordion
        class="quest-accordion"
        v-for="cat in questsCat"
        :category="cat"
        :key="cat.categoryName"
      ></questAccordion>
    </div>
    <div class="progress-card-container"></div>
  </div>
</template>

<script setup>
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
  height: 300px;
  background: white;
  order: 1;
}
@media (min-width: 800px) {
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
    height: 500px;
    background: white;
    order: 2;
  }
}
</style>
