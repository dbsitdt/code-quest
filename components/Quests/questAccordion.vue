<template>
  <div class="quest-accordion">
    <div @click="toggleAccordion" class="header">
      <p>
        {{ category.categoryName }}
        <span
          >- {{ questsLength }} Quest{{ questsLength == 1 ? "" : "s" }}</span
        >
      </p>
      <img
        draggable="false"
        :style="questSymbolStyle"
        src="../../assets/Quests/quest-accordion-dropdown.svg"
      />
    </div>
    <transition>
      <div v-if="questBoxOpened" class="quest-accordion-box">
        <div class="quest-row">
          <div
            v-for="quest in questsArray"
            :key="quest.id"
            class="quest-accordion-quest"
          >
            <svg
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-if="!hasCompleted(quest.id)"
            >
              <path
                fill="white"
                d="M18.1941 26.9063L26.5222 21.5677C26.9208 21.3115 27.1201 20.9556 27.1201 20.5C27.1201 20.0444 26.9208 19.6885 26.5222 19.4323L18.1941 14.0938C17.767 13.809 17.3325 13.7874 16.8906 14.0288C16.4487 14.2703 16.2284 14.6478 16.2295 15.1615V25.8385C16.2295 26.351 16.4504 26.7286 16.8923 26.9712C17.3342 27.2138 17.7681 27.1921 18.1941 26.9063ZM20.5003 37.5833C18.1371 37.5833 15.9163 37.1346 13.8378 36.2372C11.7594 35.3397 9.95137 34.1228 8.41387 32.5865C6.87637 31.049 5.65946 29.241 4.76316 27.1625C3.86685 25.084 3.41813 22.8632 3.41699 20.5C3.41699 18.1368 3.86571 15.916 4.76316 13.8375C5.6606 11.759 6.87751 9.95105 8.41387 8.41355C9.95137 6.87605 11.7594 5.65914 13.8378 4.76284C15.9163 3.86653 18.1371 3.41781 20.5003 3.41667C22.8635 3.41667 25.0844 3.86539 27.1628 4.76284C29.2413 5.66028 31.0493 6.87719 32.5868 8.41355C34.1243 9.95105 35.3418 11.759 36.2392 13.8375C37.1366 15.916 37.5848 18.1368 37.5837 20.5C37.5837 22.8632 37.1349 25.084 36.2375 27.1625C35.34 29.241 34.1231 31.049 32.5868 32.5865C31.0493 34.124 29.2413 35.3414 27.1628 36.2389C25.0844 37.1363 22.8635 37.5845 20.5003 37.5833ZM20.5003 34.1667C24.3156 34.1667 27.5472 32.8427 30.1951 30.1948C32.843 27.5469 34.167 24.3153 34.167 20.5C34.167 16.6847 32.843 13.4531 30.1951 10.8052C27.5472 8.1573 24.3156 6.83334 20.5003 6.83334C16.685 6.83334 13.4534 8.1573 10.8055 10.8052C8.15762 13.4531 6.83366 16.6847 6.83366 20.5C6.83366 24.3153 8.15762 27.5469 10.8055 30.1948C13.4534 32.8427 16.685 34.1667 20.5003 34.1667Z"
              />
            </svg>
            <img v-else src="../../assets/Quests/quest-accordion-done.svg" />
            <NuxtLink
              :style="{ color: getFill(quest.id) }"
              :to="'/quests/' + quest.id"
              >{{ quest.title }}</NuxtLink
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
const props = defineProps(["category", "completedQuests"]);
const { category } = toRefs(props);
const hasCompleted = function (id) {
  return props.completedQuests.includes(id);
};
const getFill = function (id) {
  const completed = hasCompleted(id);
  if (completed) {
    return "#B9B9B9";
  } else {
    return "white";
  }
};
const questsArray = computed(() => category.value.quests);
const questsLength = computed(() => questsArray.value.length);

const questBoxOpened = ref(false);
const toggleAccordion = function () {
  questBoxOpened.value = !questBoxOpened.value;
};
const questSymbolStyle = computed(() => {
  return {
    transform: questBoxOpened.value ? "rotate(180deg)" : "",
  };
});
</script>
<style scoped>
.quest-accordion {
  color: white;
  background: #1e2121;
  user-select: none;
  width: 100%;
}
@media (min-width: 1300px) {
  .quest-accordion {
    width: 45vw;
  }
}
.header {
  display: flex;
  align-items: center;

  font-weight: 500;
  padding: 15px 30px;
  cursor: pointer;
  justify-content: space-between;
}
.header p {
  font-size: clamp(20px, 2vw, 25px);
}
.header span {
  color: #8d8d8d;
}
.header img {
  transition: transform 300ms ease-in-out;
}
a {
  text-decoration: none;
  color: inherit;
}
.quest-accordion-quest {
  display: flex;
  align-items: center;
  font-size: clamp(18px, 3vw, 20px);
  gap: 0.8rem;
  margin-block: 0.5rem;
}
.quest-accordion-quest svg,
.quest-accordion-quest img {
  height: 41px;
  width: min(5vw, 35px);

  min-height: 41px;
}
.quest-accordion-box {
  padding: 0.6rem 30px;
  background: #3a4040;
  display: grid;
}
.quest-row {
  overflow: hidden;
}
.v-enter-from,
.v-leave-to {
  grid-template-rows: 0fr;
}
.v-enter-active,
.v-leave-active {
  transition: all 300ms ease-in-out; /*Vue reads the duration from here*/
}
.v-enter-to,
.v-leave-from {
  grid-template-rows: 1fr;
}
</style>
