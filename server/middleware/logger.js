import morgan from "morgan";

export default defineEventHandler((event) => {
  const logger = morgan("dev");
  logger(event.node.req, event.node.res, function () {});
});
