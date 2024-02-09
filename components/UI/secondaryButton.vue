<template>
  <button><slot></slot></button>
</template>
<style scoped>
button {
  background-color: transparent;
  color: white;
  border-radius: 5px;
  border: 2px solid var(--accent-main);
  cursor: pointer;
  padding: 0.4rem 1rem;
  transition-duration: 200ms;
  font-size: 16px;
  display: flex;
  gap: 0.6rem;
}

button:hover {
  border: 2px solid var(--btn-light-active);
}
</style>
