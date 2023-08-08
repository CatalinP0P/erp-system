import Project from "../../schemas/project.js";

export const getAll = async () => {
  const projects = await Project.find({});
  return projects;
};

export const getById = async (id) => {
  const project = await Project.findById(id);
  return project;
};

export const getCount = async () => {
  const count = await Project.count();
  return count;
};

export const getCountByField = async (key, value) => {
  const count = await Project.count({ [key]: value });
  return count;
};
