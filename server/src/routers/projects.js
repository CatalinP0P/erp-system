import express from "express";
import {
  getAll,
  getAveragePrice,
  getById,
  getCount,
  getCountByField,
} from "../utils/database/projects.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await getAll();
  res.json(projects);
});

router.get("/count", async (req, res) => {
  const count = await getCount();
  res.json(count);
});

router.get("/status/:status", async (req, res) => {
  const { status } = req.params;
  const count = await getCountByField("status", status);
  res.json(count);
});

router.get("/average/price", async (req, res) => {
  const averagePrice = await getAveragePrice();
  res.json(averagePrice);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const project = await getById(id);
  res.json(project);
});

export default router;
