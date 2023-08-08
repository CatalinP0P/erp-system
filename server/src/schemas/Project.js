import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: String,
  buyerEmail: String,
  date: { type: Date, default: () => Date.now() },
  status: {
    type: String,
    enum: ["todo", "done", "doing", "canceled"],
    default: "todo",
  },
});

const Project = model("Project", projectSchema);
export default Project;
