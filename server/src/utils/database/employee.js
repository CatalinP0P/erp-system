import Employee from "../../schemas/employee.js";

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

export const getAverageSalary = async () => {
  const employees = await getAll();
  var sum = 0;
  var count = 0;
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].salary) {
      sum += employees[i].salary;
      count += 1;
    }
  }

  return count > 0 ? sum / count : 0;
};

export const getMinSalary = async () => {
  const employees = await getAll();
  var min = employees[0].salary;
  for (var i = 0; i < employees.length; i++) {
    if (employees[i].salary && employees[i].salary < min) {
      min = employees[i].salary;
    }
  }

  return min;
};
