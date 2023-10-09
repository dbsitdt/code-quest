<template>
  <header>
    <TheQuestsNav />
  </header>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  display: flex;
  height: 90vh;
  background: var(--bg-dark-light);
}
</style>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
}
/* html {
  width: 100%;
  height: 100%;
} */
/* div#__nuxt,
#__layout,
#__layout > div,
#app {
  height: 100vh;
} */
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
</style>
