import express from "express";
import { getAll, getById } from "../utils/database/employee.js";

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

export default router;
