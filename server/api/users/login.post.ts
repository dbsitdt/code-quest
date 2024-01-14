import User from "../../../models/userModel.js";
import jwt from "jsonwebtoken";
export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  if (!body || !body.email || !body.password)
    return createAppError(
      "You need to provide your email and password!",
      400,
      event
    );
  const { email, password } = body;
  const user: any = await User.findOne({ email }).select("+password");
  if (!user || !(await user.correctPassword(password, user.password))) {
    return createAppError("Incorrect email or password", 401, event);
  }
  const { jwtSecret, jwtExpiresIn } = useRuntimeConfig();
  const token: string = jwt.sign({ id: user._id }, jwtSecret, {
    expiresIn: jwtExpiresIn,
  });
  setResponseStatus(event, 200);
  return {
    status: "success",
    id: user.id,
    token,
  };
});
