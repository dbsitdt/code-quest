export default defineEventHandler(async (event) => {
  const {
    public: { usersApi },
  } = useRuntimeConfig();
  const { userId } = getQuery(event);
  const res = await $fetch(`${usersApi}/users/${userId}.json`);
  return res;
});
