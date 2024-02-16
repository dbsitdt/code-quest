import sanitize from "mongo-sanitize";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    sanitize(body);
  } catch {}
});
