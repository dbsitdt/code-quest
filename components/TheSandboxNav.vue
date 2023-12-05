<template>
  <nav>
    <div class="nav-logo">
      <NuxtLink to="/">
        <img src="../assets/Nav/itdtlogo.svg" alt="ITDT Logo" />
        <p>ITDT Code Quest</p>
      </NuxtLink>
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
<style scoped>
nav {
  height: 10vh;
  min-height: 4rem;
  background-color: var(--bg-dark);
  padding: 2vh 4vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
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
