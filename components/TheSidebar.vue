<template>
  <transition>
    <nav v-if="sidebarOpened">
      <ul>
        <li>
          <NuxtLink to="/quests">
            <img draggable="false" src="../assets/Sidebar/home.svg" />
            <p>Home</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/leaderboard"
            ><img draggable="false" src="../assets/Sidebar/leaderboard.svg" />
            <p>Leaderboard</p></NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/sandbox">
            <img draggable="false" src="../assets/Sidebar/sandbox.svg" />
            <p>Sandbox</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/settings">
            <img draggable="false" src="../assets/Sidebar/settings.svg" />
            <p>Settings</p>
          </NuxtLink>
        </li>
        <li>
          <a href="https://dbsitdt.netlify.app" target="_blank">
            <img draggable="false" src="../assets/Sidebar/redirect.svg" />
            <p>Website</p>
          </a>
        </li>
      </ul>
    </nav>
  </transition>
</template>
<script setup>
const props = defineProps(["sidebarOpened"]);
const { sidebarOpened } = toRefs(props);
</script>
<style scoped>
nav {
  height: 100%;
  position: absolute;
  background: #151c24;
  padding: 0 clamp(1.5rem, 3vw, 3rem);
}
ul {
  margin-top: 10vh;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4vh;
  list-style: none;
}
li {
  margin: 0;
  padding: 0;
}
li a {
  display: flex;
  gap: 0.5rem;
  background: #00070f;
  padding: 11px 14px;
  border-radius: 9px;
  width: clamp(11.5rem, 13vw, 14.1rem);
  color: white;
  text-decoration: none;
  font-size: 18px;
}
.router-link-exact-active {
  background: #278bff;
}
@media (min-width: 800px) {
  nav {
    position: static;
  }
}
.v-enter-from,
.v-leave-to {
  transform: translateX(-60vw);
}
.v-enter-active,
.v-leave-active {
  transition: transform 300ms ease-in-out;
}
.v-enter-to,
.v-leave-from {
  transform: translateX(0);
}
</style>
