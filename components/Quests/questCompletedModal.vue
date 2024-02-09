<template>
  <modal :show="completedQuest && !hide">
    <div class="modal-container">
      <h4 class="completed-text">
        {{ title }}: <span class="complete">Completed</span>
      </h4>
      <p v-if="firstTime && nextRank.achievedAllRanks">
        You've achieved all ranks of mastery!
      </p>
      <p v-if="firstTime && nextRank.justAchieved">
        You have achieved
        <span :style="rankStyle">{{ nextRank.rankName }}</span> rank!
      </p>
      <p v-else-if="firstTime">
        {{ nextRank.toNext }} quest{{ nextRank.toNext === 1 ? "" : "s" }} till
        <span :style="rankStyle">{{ nextRank.rankName }}</span>
        rank!
      </p>
      <p v-else class="questsTill">You've completed this quest previously!</p>
      <div class="button-container">
        <primaryButton v-if="!lastInCat" @click="nextQuest"
          >Next Quest</primaryButton
        >
        <primaryButton v-else @click="backToQuests">All Quests</primaryButton>
        <secondaryButton @click="closeModal">Back to editing</secondaryButton>
      </div>
    </div>
  </modal>
</template>
<script setup>
const props = defineProps([
  "title",
  "completedQuestNumber",
  "completedQuest",
  "firstTime",
  "questId",
  "lastInCat",
]);
const {
  title,
  completedQuestNumber,
  completedQuest,
  firstTime,
  questId,
  lastInCat,
} = toRefs(props);
const hide = ref(false);

const nextRank = computed(() => {
  if (completedQuestNumber.value <= 10) {
    const toNext = 10 - completedQuestNumber.value;
    return {
      rankName: "Intermediate",
      rankColor: "#8DBB6E",
      toNext,
      justAchieved: toNext === 0,
    };
  } else if (completedQuestNumber.value <= 20) {
    const toNext = 20 - completedQuestNumber.value;
    return {
      rankName: "Expert",
      rankColor: "#57A5ED",
      toNext,
      justAchieved: toNext === 0,
    };
  } else if (completedQuestNumber.value <= 40) {
    const toNext = 40 - completedQuestNumber.value;
    return {
      rankName: "Master",
      rankColor: "#BF6DD8",
      toNext,
      justAchieved: toNext === 0,
    };
  } else {
    return {
      achievedAllRanks: true,
    };
  }
});

const nextQuest = async function () {
  const cutId = Number(questId.value.slice(1, questId.length));
  await navigateTo({ path: `${questId.value.slice(0, 1)}${cutId + 1}` });
};
const backToQuests = async function () {
  await navigateTo("/quests");
};
const closeModal = function () {
  hide.value = true;
};
const rankStyle = computed(() => {
  return { color: nextRank.value.rankColor };
});
</script>
<style scoped>
.completed-text {
  font-size: clamp(1.7rem, 4vw, 2rem);
  font-weight: 500;
}
.completed-text .complete {
  color: #98c379;
}
p {
  font-size: clamp(1.2rem, 2vw, 1.4rem);
  font-weight: 300;
}
span {
  font-weight: 500;
}
div.modal-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;
}
.button-container {
  margin-top: 2vh;
  display: flex;
  gap: 1rem;
}
</style>
