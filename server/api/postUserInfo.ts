export default defineEventHandler(async (event) => {
  const {
    public: { usersApi },
  } = useRuntimeConfig();
  const { username, completedQuests, userId, token } = await readBody(event);
  try {
    await $fetch(`${usersApi}/users/${userId}.json?auth=${token}`, {
      method: "PUT",
      body: JSON.stringify({
        username,
        completedQuests,
      }),
    });
  } catch (err) {
    console.error(err);
  }
});
