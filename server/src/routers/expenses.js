import express from "express";
import {
  add,
  getById,
  getTotal,
  getTotalByCategory,
  getTotalById,
} from "../utils/database/expenses.js";

const router = express.Router();

router.get("/total", async (req, res) => {
  res.json(await getTotal());
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
