import { createAppError } from "../utils/createAppError.ts";

export default defineEventHandler((event: any) => {
  // event.context.path to get the route path: '/api/foo/bar/baz'
  // event.context.params._ to get the route segment: 'bar/baz'
  return createAppError(
    `Path ${event.context.params._} is not found.`,
    404,
    event
  );
});
