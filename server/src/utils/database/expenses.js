import Expense from "../../schemas/expense.js";

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

  return total;
};

export const getById = async (id) => {
  try {
    return await Expense.findById(id);
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

  var total = 0;
  allExpenses.forEach((expense) => {
    total += expense.price;
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
