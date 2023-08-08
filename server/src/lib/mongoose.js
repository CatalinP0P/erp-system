import mongoose from "mongoose";
import Project from "../schemas/project.js";
import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_CONNECT)
  .then(() => {
    console.log("Conencted to db");
  })
  .catch((err) => {
    console.log("Mongoose Erorr:", err.message);
  });

export default mongoose;
