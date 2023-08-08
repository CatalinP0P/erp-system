import mongoose from "mongoose";
import Project from "../schemas/Project.js";

mongoose
  .connect(
    "mongodb+srv://CatalinPCE:123@testingcluster.xtluszh.mongodb.net/ERP-Project?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conencted to db");
  })
  .catch((err) => {
    console.log("Mongoose Erorr:", err.message);
  });

export default mongoose;
