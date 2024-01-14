export default defineEventHandler((event) => {
  const adminPaths = ["/api/users/signup"];
  const { req } = event.node;
  if (adminPaths.includes(req.url)) {
    if (!(req.user?.role === "admin")) {
      throw new AppError(
        "You do not have permission to perform this action.",
        403
      );
    }
  }
});
