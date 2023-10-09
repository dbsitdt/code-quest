<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  padding: 0.5rem 1.2rem;
  background: var(--accent-main);
  color: white;
  font-size: 0.9rem;
  border-radius: 50px;
  border: none;
  -webkit-border: none;
  font-family: inherit;
  cursor: pointer;
  font-family: Roboto Mono;
}
</style>
