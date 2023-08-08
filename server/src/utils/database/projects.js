import Project from "../../schemas/project.js";

export const getAll = async () => {
  const projects = await Project.find({});
  return projects;
};

export const getById = async (id) => {
  try {
    return await Project.findById(id);
  } catch (err) {
    return { err: err.message };
  }
};

export const getCount = async () => {
  const count = await Project.count();
  return count;
};

export const getCountByField = async (key, value) => {
  const count = await Project.count({ [key]: value });
  return count;
};

export const getAveragePrice = async () => {
  const projects = await Project.find({}).select("price");
  var price = 0;
  var count = 0;
  for (var i = 0; i < projects.length; i++) {
    if (projects[i].price) {
      price += projects[i].price;
      count += 1;
    }
  }

  return count > 0 ? price / projects.length : 0;
};
