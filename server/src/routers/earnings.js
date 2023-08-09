import express from "express";
import * as projects from "../utils/database/projects.js";
import * as expenses from "../utils/database/expenses.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const totalEarnings =
    (await projects.getAveragePrice()) * (await projects.getCount());
  res.json(totalEarnings);
});

router.get("/profit", async (req, res) => {
  const earnings =
    (await projects.getAveragePrice()) * (await projects.getCount());

  const totalExpenses = await expenses.getTotal();

  res.json(earnings - totalExpenses);
});

router.get("/profit/average/project", async (req, res) => {
  const averageEarnings = await projects.getAveragePrice();
  const averageExpenses = await expenses.getAverageExpenses();

  res.json(averageEarnings - averageExpenses);
});

export default router;
