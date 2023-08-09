import express from "express";
import {
  add,
  getById,
  getTotal,
  getTotalByCategory,
  getTotalById,
} from "../utils/database/expenses.js";
import * as projects from "../utils/database/projects.js";

const router = express.Router();

router.get("/total", async (req, res) => {
  res.json(await getTotal());
});

router.get("/average", async (req, res) => {
  const allProjects = await projects.getAll();
  var sum = 0;
  var count = 0;
  for (let i = 0; i < allProjects.length; i++) {
    const expense = await getTotalById(allProjects[i].id);
    sum += expense;
    count += 1;
  }

  return res.json(count > 0 ? sum / count : 0);
});

router.get("/:id", async (req, res) => {
  res.json(await getById(req.params.id));
});

router.get("/total/:id", async (req, res) => {
  try {
    res.json(await getTotalById(req.params.id));
  } catch (err) {
    res.status(400).json("Not found");
  }
});

router.get("/total/category/:category", async (req, res) => {
  res.json(await getTotalByCategory(req.params.category));
});

router.post("/", async (req, res) => {
  const newExpense = await add(req.body);
  if (newExpense.err) {
    return res.status(400).json(newExpense.err);
  }
  res.json(newExpense);
});

export default router;
