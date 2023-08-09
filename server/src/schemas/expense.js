import mongoose from "mongoose";
const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  projectId: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
  category: {
    type: String,
    enum: ["labour", "data storage", "service", "hosting", "others"],
    required: true,
  },
  details: { type: String, required: true },
});

const Expense = model("Expense", expenseSchema);
export default Expense;
