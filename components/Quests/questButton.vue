<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  padding: 0.5rem 1.2rem;
  background: var(--btn-light);
  color: white;
  font-size: 0.9rem;
  border-radius: 50px;
  border: none;
  -webkit-border: none;
  font-family: inherit;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: background-color 100ms linear;
}
button:hover {
  background: var(--btn-light-active);
}
</style>
