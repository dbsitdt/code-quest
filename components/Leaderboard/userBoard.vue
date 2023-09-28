<template>
  <div class="user">
    <div class="place">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 21V19H11V15.9C10.1833 15.7167 9.454 15.3707 8.812 14.862C8.17 14.3533 7.69933 13.716 7.4 12.95C6.15 12.8 5.104 12.2543 4.262 11.313C3.42 10.3717 2.99933 9.26733 3 8V7C3 6.45 3.196 5.979 3.588 5.587C3.98 5.195 4.45067 4.99933 5 5H7V3H17V5H19C19.55 5 20.021 5.196 20.413 5.588C20.805 5.98 21.0007 6.45067 21 7V8C21 9.26667 20.579 10.371 19.737 11.313C18.895 12.255 17.8493 12.8007 16.6 12.95C16.3 13.7167 15.829 14.3543 15.187 14.863C14.545 15.3717 13.816 15.7173 13 15.9V19H17V21H7ZM7 10.8V7H5V8C5 8.63333 5.18333 9.20433 5.55 9.713C5.91667 10.2217 6.4 10.584 7 10.8ZM12 14C12.8333 14 13.5417 13.7083 14.125 13.125C14.7083 12.5417 15 11.8333 15 11V5H9V11C9 11.8333 9.29167 12.5417 9.875 13.125C10.4583 13.7083 11.1667 14 12 14ZM17 10.8C17.6 10.5833 18.0833 10.2207 18.45 9.712C18.8167 9.20333 19 8.63267 19 8V7H17V10.8Z"
          :fill="iconFill"
        />
      </svg>
      <p class="place-number">{{ user.place }}</p>
    </div>
    <p>{{ user.username }}</p>
    <p>{{ user.questNumber }} quests</p>
    <p :style="{ color: rankInfo.rankColor }">{{ rankInfo.rank }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["user"]);
const { user } = toRefs(props);
let iconFill = ref("");
if (user.value.place === 1) {
  iconFill.value = "#FFF61A";
} else if (user.value.place === 2) {
  iconFill.value = "#E1E1E1";
} else if (user.value.place === 3) {
  iconFill.value = "#E1A66F";
} else {
  iconFill.value = "#494949";
}
const rankInfo = computed(() => {
  const num = props.user.questNumber;
  if (num <= 10) {
    return {
      rank: "Novice",
      rankColor: "#D6B06C",
    };
  }
  if (num <= 20) {
    return {
      rank: "Intermediate",
      rankColor: "#8DBB6E",
    };
  }
  if (num <= 40) {
    return {
      rank: "Expert",
      rankColor: "#57A5ED",
    };
  }
  if (num <= 60) {
    return {
      rank: "Master",
      rankColor: "#BF6DD8",
    };
  }
});
</script>
<style scoped>
.user {
  display: grid;
  padding: 20px;

  grid-template-columns: 0.5fr 1.5fr 1fr 1fr;
  color: white;
  font-size: 18px;
  gap: 0.4rem;
}
.place-number {
  display: none;
}
@media (min-width: 500px) {
  .user {
    grid-template-columns: 1fr 2fr 1fr 1fr;
  }
  .place-number {
    display: inline-block;
  }
}
@media (min-width: 1000px) {
  .user {
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
  }
}
.place {
  display: flex;
  gap: 0.8rem;
}
</style>
