export default defineEventHandler(async () => {
  const {
    public: { usersApi },
  } = useRuntimeConfig();
  const res: any = await $fetch(`${usersApi}/users.json`);
  return Object.values(res);
});
