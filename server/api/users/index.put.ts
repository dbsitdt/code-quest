import User from "../../../models/userModel.js";
const filterObj = function (obj: any, ...allowedFields: string[]) {
  const newObj: any = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
export default defineEventHandler(async (event: any) => {
  try {
    const { id } = getQuery(event);
    const body = await readBody(event);
    if (!body)
      return createAppError(
        "You need to provide a body to edit user information.",
        400,
        event
      );
    const filteredBody = filterObj(body, "completedQuests");
    const updatedUser: any = await User.findByIdAndUpdate(id, filteredBody, {
      new: true,
      runValidators: true,
    });
    setResponseStatus(event, 200);
    return {
      status: "success",
      data: {
        updatedUser,
      },
    };
  } catch (err: any) {
    if (err.name === "CastError") {
      throw new AppError(`Invalid user ID.`, 400);
    }
    throw err;
  }
});
