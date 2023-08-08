import express from "express";
import Project from "./schemas/project.js";
import mongoose from "./lib/mongoose.js";

const app = express();
app.use(express.json());

import projectsRouter from "./routers/projects.js";
app.use("/projects/", projectsRouter);

import employeeRouter from "./routers/employees.js";
app.use("/employees", employeeRouter);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
