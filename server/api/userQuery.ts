export default defineEventHandler(async (event) => {
  const {
    public: { usersApi },
  } = useRuntimeConfig();
  const { userId } = getQuery(event);
  try {
    const res = await $fetch(`${usersApi}/users/${userId}.json`);
    return res;
  } catch (err) {
    throw new Error("Something went wrong");
  }
});
