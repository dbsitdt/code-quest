import User from "../../../models/userModel";
import jwt from "jsonwebtoken";
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body)
      return createAppError(
        "You need to provide your username, email and password!",
        400,
        event
      );
    const newUser: any = await User.create({
      username: body.username,
      email: body.email,
      password: body.password,
      passwordConfirm: body.passwordConfirm,
      passwordChangedAt: body.passwordChangedAt,
    });
    const { jwtSecret, jwtExpiresIn } = useRuntimeConfig();
    const token = jwt.sign({ id: newUser._id }, jwtSecret, {
      expiresIn: jwtExpiresIn,
    });
    await newUser.createUpdatetoken();
    await newUser.save({ validateBeforeSave: false });
    setResponseStatus(event, 501);
    return {
      status: "success",
      token,
      data: {
        user: newUser,
      },
    };
  } catch (err: any) {
    if (err.code === 11000) {
      const value = err.errmsg.match(/(["'])(\\?.)*?\1/);
      const message = `Duplicate field value: ${value[0]}. Please use another value!`;
      throw new AppError(message, 400);
    } else if (err.name === "ValidationError") {
      const errors = Object.values(err.errors).map((el: any) => el.message);

      const message = `Invalid input data. ${errors.join(" ")}`;
      throw new AppError(message, 400);
    }
  }
});
