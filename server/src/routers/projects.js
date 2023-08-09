import express from "express";
import {
  getAll,
  getAveragePrice,
  getById,
  getCount,
  getCountByField,
} from "../utils/database/projects.js";
import Project from "../schemas/project.js";
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

router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  const count = await getCountByField("category", category.toLowerCase());
  res.json(count);
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
  const projectData = req.body;
  const newProject = new Project(projectData);
  await newProject.save();
  res.json(newProject);
});

export default router;
