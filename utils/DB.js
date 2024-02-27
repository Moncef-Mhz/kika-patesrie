import mongoose from "mongoose";
let conntodb = false;
export const ConnectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (conntodb) {
    console.log("you r already connect to db");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Products",
    });
    conntodb = true;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
};
