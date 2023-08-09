import mongoose from "mongoose";
const { Schema, model } = mongoose;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  salary: { type: Number, required: true },
  signDate: { type: Date, default: new Date() },
});

const Employee = model("Employee", employeeSchema);

export default Employee;
