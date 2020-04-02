export const calculateTotalSpent = transactions => transactions
  .reduce((acc, transaction) => acc + transaction.amount, 0);

export const calculateAmountTaken = (budgetedCategories, transactions) => budgetedCategories
  .reduce((acc, item) => {
    const categoryTransactions = transactions
      .filter(transaction => transaction.categoryId === item.id);
    const categoryExpenses = categoryTransactions
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return acc + Math.max(item.budget, categoryExpenses);
  }, 0);

export const filterNotBudgetedTransactions = (transactions, budgetedCategories) => transactions
  .filter(transaction => !budgetedCategories.find(item => item.id === transaction.categoryId));

export const calculateNotBudgetedExpenses = notBudgetedTransactions => notBudgetedTransactions
  .reduce((acc, transaction) => acc + transaction.amount, 0);
