<template>
  <nav>
    <div class="nav-container">
      <div class="nav-logo">
        <NuxtLink to="/">
          <img src="../assets/Nav/itdtlogo.svg" alt="ITDT Logo" />
          <p>ITDT Code Quest</p>
        </NuxtLink>
      </div>
      <div class="nav-profile">
        <img class="profile-img" src="../assets/Pfp/pfp1.png" />
        <p>{{ username }}</p>
        <img draggable="false" src="../assets/ui/dropdown.svg" />
      </div>
    </div>
    <div class="hamburger" @click="toggleSidebar">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </nav>
</template>
<script setup>
import { useUserStore } from "../stores/user.ts";
const store = useUserStore();

const username = computed(() => store.getUserInfo.username);
// BUG Not allowed to load local resource
// const profilePic = computed(() => store.getUserInfo.profilePicture);
// const getPfpPath = function () {
//   return new URL(`../assets/Pfp/pfp${profilePic.value}.png`, import.meta.url)
//     .href;
// };

// console.log(pfpLink.value);
const emit = defineEmits(["toggle-sidebar"]);
const toggleSidebar = function () {
  emit("toggle-sidebar");
};
</script>
<style scoped>
nav {
  height: 10vh;
  min-height: 4rem;
  background-color: #1e2121;
  padding: 2vh 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-container {
  display: flex;
  color: white;
  gap: 1rem;
  align-items: center;
  flex: 1;
}

.nav-logo p {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 600;
}
.nav-profile {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.nav-profile p {
  font-size: 1.1rem;
  font-weight: 600;
}
.profile-img {
  width: 38px;
  height: 38px;
  object-fit: cover;
  margin-right: 0.7rem;
  border-radius: 5px;
  display: block;
}
.nav-logo p {
  display: none;
}
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  align-items: flex-end;
  cursor: pointer;
}
.line {
  height: 3px;
  background: white;
}
.line:nth-child(1) {
  width: 24px;
  align-self: flex-start;
}
.line:nth-child(2) {
  width: 32px;
}
.line:nth-child(3) {
  width: 24px;
}

@media (min-width: 800px) {
  .nav-container {
    justify-content: space-between;
  }
  .nav-logo p {
    display: inline-block;
  }
  .hamburger {
    display: none;
  }
}
</style>
