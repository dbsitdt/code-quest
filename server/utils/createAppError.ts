import { AppError } from "./AppError";

const sendErrorDev = (err: AppError, event: any) => {
  setResponseStatus(event, err.statusCode);
  const res = {
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  };
  return res;
};

const sendErrorProd = (err: AppError, event: any) => {
  if (err.isOperational) {
    setResponseStatus(event, err.statusCode);

    const res = {
      status: err.status,
      message: err.message,
    };
    return res;
  } else {
    console.error("ERROR 💥", err);
    setResponseStatus(event, 500);

    const res = {
      status: "error",
      message: "Something went very wrong!",
    };
    return res;
  }
};

export const createAppError = (
  message: string,
  statusCode: number,
  event: any
) => {
  const err = new AppError(message, statusCode);
  const { serverEnv } = useRuntimeConfig();
  if (serverEnv === "development") {
    return sendErrorDev(err, event);
  } else {
    return sendErrorProd(err, event);
  }
};
