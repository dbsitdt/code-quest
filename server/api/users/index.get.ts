import User from "../../../models/userModel.js";
export default defineEventHandler(async (event: any) => {
  try {
    const { id } = getQuery(event);
    if (!id) {
      const users = await User.find();

      setResponseStatus(event, 200);
      return {
        status: "success",
        results: users.length,
        data: { users },
      };
    } else {
      const user = await User.findById(id);
      if (!user) {
        return createAppError("User not found.", 400, event);
      }
      setResponseStatus(event, 200);
      return {
        status: "success",
        data: {
          user,
        },
      };
    }
  } catch (err: any) {
    if (err.name === "CastError") {
      throw createAppError("Invalid user ID", 400, event);
    }
    throw err;
  }
});
