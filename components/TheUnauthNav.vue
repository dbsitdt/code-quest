<template>
  <nav>
    <div class="nav-container">
      <div class="nav-logo">
        <NuxtLink to="/">
          <img src="../assets/Nav/itdtlogo.svg" alt="ITDT Logo" />
          <p>ITDT Code Quest</p>
        </NuxtLink>
      </div>
      <div class="nav-login">
        <NuxtLink to="/login">
          <p>Login</p>
          <img src="../assets/Nav/login.svg" />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
<script setup></script>
<style scoped>
nav {
  height: 10vh;
  min-height: 4rem;
  background-color: var(--bg-dark);
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
  justify-content: space-between;
}

.nav-logo p {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 600;
}
.nav-login a {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
}
.nav-login p {
  font-size: 1.1rem;
  font-weight: 600;
}
.profile-img {
  width: 38px;
  height: 38px;
  object-fit: cover;
  margin-right: 0.7rem;
  border-radius: 38px;
  display: block;
}
.nav-logo p {
  display: none;
}

@media (min-width: 800px) {
  .nav-logo p {
    display: inline-block;
  }
}
</style>
