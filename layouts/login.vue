<template>
  <div>
    <header>
      <TheUnauthNav />
    </header>
    <div class="container">
      <div class="content"><slot></slot></div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.container {
  display: flex;
  height: 90vh;
  background: var(--bg-dark-light);
}
.content {
  flex: 1;
  width: 100%;
}
</style>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
h6,
label,
input,
button {
  font-family: "Poppins", sans-serif;
}
</style>
