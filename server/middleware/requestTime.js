export default defineEventHandler((event) => {
  event.req.requestTime = new Date().toISOString;
});
