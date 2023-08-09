import express from "express";
import {
  getAll,
  getAverageSalary,
  getById,
  getMinSalary,
} from "../utils/database/employee.js";
import Employee from "../schemas/employee.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const employees = await getAll();
  res.json(employees);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await getById(id);
  if (response.err) {
    return res.status(400).json(response.err);
  }
  return res.json(response);
});

router.post("/", async (req, res) => {
  const employeeData = req.body;
  try {
    const newEmployee = new Employee(employeeData);
    await newEmployee.save();
    return res.json(newEmployee);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

router.get("/average/salary", async (req, res) => {
  return res.json(await getAverageSalary());
});

router.get("/min/salary", async (req, res) => {
  return res.json(await getMinSalary());
});

export default router;
