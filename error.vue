<template>
  <div class="error-container">
    <h4>{{ error.statusCode }}</h4>
    <h3>Oops! Something went wrong!</h3>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Return to Home</NuxtLink>
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: var(--bg-dark-light);
}
div#__nuxt,
#__layout,
#__layout > div,
#app {
  height: 100vh;
}
p,
a,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}
.error-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--bg-dark-light);
}
a {
  padding: 0.5rem 1.2rem;
  background: var(--accent-main);
  color: white;
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  -webkit-border: none;
  font-family: inherit;
  cursor: pointer;
  font-family: Roboto Mono;
  margin-top: 1rem;
  text-decoration: none;
}
h3 {
  font-size: clamp(2rem, 4vw, 4.5rem);
}
h4 {
  font-size: clamp(1rem, 3vw, 3rem);
}
</style>
