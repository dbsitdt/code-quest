export default defineEventHandler(async () => {
  const {
    public: { usersApi },
  } = useRuntimeConfig();
  const res = await $fetch(`${usersApi}/users.json`);
  return res;
});
