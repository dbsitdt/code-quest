import mongoose from "mongoose";
export default defineNitroPlugin((nitroApp) => {
  const { dbURL, dbPassword } = useRuntimeConfig();

  const DB = dbURL.replace("<password>", dbPassword);
  mongoose
    .connect(DB)
    .then(() => {
      console.log("DB Connection successful 👏");
    })
    .catch((err) => console.error(err));
});
