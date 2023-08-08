import Employee from "../../schemas/employee.js";

// const employee = new Employee({
//   name: "Pop Catalin",
//   email: "catalinpce@gmail.com",
//   salary: 2400,
// });

// await employee.save();

export const getAll = async () => {
  return await Employee.find({});
};

export const getById = async (id) => {
  try {
    return await Employee.findById(id);
  } catch (err) {
    return { err: err.message };
  }
};
