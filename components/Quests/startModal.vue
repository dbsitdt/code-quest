<template>
  <modal :show="show">
    <div class="modal-container">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="hasLinks || hasConcepts" class="info-container">
        <div v-if="hasConcepts" class="key-concepts">
          <h5>Key concepts</h5>
          <ol>
            <li v-for="(concept, i) in concepts" :key="i">
              <p>{{ concept }}</p>
            </li>
          </ol>
        </div>
        <div v-if="hasLinks" class="useful-links">
          <h5>Useful Links</h5>
          <ul>
            <li v-for="(link, i) in links" :key="i">
              <a target="_blank" :href="link.url">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <primaryButton @click="closeModal">{{ buttonText }}</primaryButton>
    </div>
  </modal>
</template>
<script setup>
const emit = defineEmits(["closeModal"]);

const props = defineProps(["show", "questInfo", "isFirstTime"]);

const { show, questInfo, isFirstTime } = toRefs(props);
const { title, links, concepts, description } = questInfo.value;
const hasLinks = computed(() => links?.length > 0);
const hasConcepts = computed(() => concepts?.length > 0);
const buttonText = computed(() =>
  isFirstTime.value ? "Start editing" : "Back to editing"
);
const closeModal = function () {
  emit("closeModal");
};
</script>
<style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
}
.info-container {
  margin-block: 1rem;
  width: 100%;
  display: flex;
  gap: clamp(1rem, 2vw, 3rem);
  flex-wrap: wrap;
}
h3 {
  font-size: clamp(1.7rem, 4vw, 2rem);
  font-weight: 500;
}
h5 {
  font-size: clamp(1.2rem, 2vw, 1.4rem);

  font-weight: 500;
}
div > p {
  font-weight: 300;
  font-size: 1.1rem;
}
ul,
ol {
  list-style-position: inside;
}
li a {
  color: inherit;
}
li p {
  display: inline;
}
</style>
