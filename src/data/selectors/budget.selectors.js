import { createSelector } from 'reselect';

const getBudgetTransactions = state => state.budget.budget.transactions;
const getBudgetedCategories = state => state.budget.budgetedCategories;

export const totalSpentSelector = createSelector(
  [getBudgetTransactions],
  transactions => transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
);

export const amountTakenSelector = createSelector(
  [getBudgetedCategories, getBudgetTransactions],
  (budgetedCategories, transactions) => budgetedCategories.reduce((acc, item) => {
    const categoryTransactions = transactions
      .filter(transaction => transaction.categoryId === item.id);
    const categoryExpenses = categoryTransactions
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    return acc + Math.max(item.budget, categoryExpenses);
  }, 0),
);

export const notBudgetedTransactionsSelector = createSelector(
  [getBudgetTransactions, getBudgetedCategories],
  (transactions, budgetedCategories) => transactions
    .filter(transaction => !budgetedCategories.find(item => item.id === transaction.categoryId)),
);

export const notBudgetedExpensesSelector = createSelector(
  [notBudgetedTransactionsSelector],
  notBudgetedTransactions => notBudgetedTransactions
    .reduce((acc, transaction) => acc + transaction.amount, 0),
);

