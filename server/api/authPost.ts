export default defineEventHandler(async (event) => {
  const {
    public: { authKey },
  } = useRuntimeConfig();
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authKey}`;
  const { email, password, returnSecureToken } = await readBody(event);
  try {
    const res = await $fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken,
      }),
    });
    return res;
  } catch (err) {
    throw new Error("Something went wrong");
  }
});
