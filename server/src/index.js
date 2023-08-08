import express from "express";
import Project from "./schemas/Project.js";
import mongoose from "./lib/mongoose.js";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
