<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  padding: 0.4rem 1.2rem;
  background: var(--btn-light);
  color: white;
  border-radius: 5px;

  border: none;
  -webkit-border: none;
  font-family: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  transition: background-color 200ms linear;
}
button:hover {
  background: var(--btn-light-active);
}
</style>
