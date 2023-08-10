import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  title: String,
  buyerEmail: String,
  date: { type: Date, default: () => Date.now() },
  category: {
    type: String,
    enum: ["portfolio", "brochure", "dashboard", "other", "ecommerce"],
  },
  status: {
    type: String,
    enum: ["todo", "done", "doing", "canceled"],
    default: "todo",
  },
  price: { type: Number, min: 0 },
});

const Project = model("Project", projectSchema);
export default Project;
