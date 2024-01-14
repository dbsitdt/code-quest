import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../../models/userModel";
export default defineEventHandler(async (event) => {
  try {
    let token;
    const protectedPaths = ["/api/users?id", "/api/users", "/api/updateMe"];
    const specialPaths = ["/api/users/login"];
    const { req } = event.node;
    if (
      (protectedPaths.includes(req.url) ||
        protectedPaths.some((path) => req.url.includes(path))) &&
      !specialPaths.includes(req.url)
    ) {
      if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        token = req.headers.authorization.split(" ")[1];
      }

      if (!token)
        throw createAppError(
          "You're not logged in. Please login to get access.",
          401,
          event
        );
      const { jwtSecret } = useRuntimeConfig();
      const decoded = await promisify(jwt.verify)(token, jwtSecret);

      const currentUser = await User.findById(decoded.id);
      req.user = currentUser;
      if (!currentUser)
        throw createAppError(
          "The user belonging to this token no longer exist.",
          400,
          event
        );
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        throw createAppError(
          "User recently changed password. Please log in again.",
          401,
          event
        );
      }
    }
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      throw createAppError(`Invalid token. Please log in again!`, 401, event);
    } else if (err.name === "TokenExpiredError") {
      throw createAppError(
        `The token has expired. Please log in again!`,
        401,
        event
      );
    }
    throw err;
  }
});
