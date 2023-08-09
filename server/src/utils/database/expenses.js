import { allowedNodeEnvironmentFlags } from "process";
import Expense from "../../schemas/expense.js";
import * as projects from "../database/projects.js";

export const getAll = async () => {
  return await Expense.find({});
};

export const getTotal = async () => {
  const allExpenses = await getAll();
  console.error(allExpenses);
  var total = 0;
  allExpenses.forEach((expense) => {
    total += expense.value;
  });
  console.log(total);

  return total;
};

export const getById = async (id) => {
  try {
    return await Expense.find({ projectId: id });
  } catch (err) {
    return { err: err.message };
  }
};

export const getTotalById = async (id) => {
  const allExpenses = await getById(id);
  if (allExpenses == null) return 0;
  if (allExpenses.err) {
    return { err: allExpenses.err };
  }
  console.log(allExpenses);
  var total = 0;
  allExpenses.forEach((expense) => {
    total += expense.value;
  });

  return total;
};

export const getTotalByCategory = async (category) => {
  const expenses = await Expense.find({ category: category });
  console.log(expenses);
  var sum = 0;
  expenses.forEach((expense) => {
    sum += expense.value;
  });

  return sum;
};

export const add = async (expenseData) => {
  try {
    const newExpense = new Expense(expenseData);
    await newExpense.save();
    return newExpense;
  } catch (err) {
    return { err: err.message };
  }
};

export const getAverageExpenses = async () => {
  const allProjects = await projects.getAll();
  var sum = 0;
  var count = 0;
  for (let i = 0; i < allProjects.length; i++) {
    sum += await getTotalById(allProjects[i].id);
    count += 1;
  }

  return count > 0 ? sum / count : 0;
};
